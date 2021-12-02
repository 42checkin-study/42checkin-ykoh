import { Card } from '../database/models/card.model';
import { CheckIn } from '../database/models/checkIn.model';
import { Cluster } from '../database/models/cluster.model';

async function setCapacity(cluster: Cluster): Promise<Cluster> {
  cluster.capacity = await CheckIn.count({
    include: {
      model: Card,
      attributes: ['clusterName'],
      where: { clusterName: cluster.name },
    },
  });
  return cluster;
}

export async function getClusters(): Promise<Cluster[]> {
  const clusters: Cluster[] = await Cluster.findAll({ raw: true });

  const promises: Promise<Cluster>[] = clusters.map(setCapacity);

  await Promise.all(promises);

  return clusters;
}

export function getErrorMessage(error: any): string {
  let message: string = 'Error occurred.';

  if (error.parent?.code === '23503') {
    message = `Card is not exist.`;
  } else {
    const parameters: string[] = error.parent?.parameters;

    if (parameters?.length > 2) {
      message = `User(${parameters[0]}) is already checked-in with a card(${parameters[1]}) at '${parameters[2]}'.`;
    }
  }
  return message;
}
