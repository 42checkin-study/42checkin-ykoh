import { app } from './app';
import { logger } from './config/logger';
import { STAGE } from './config/secrets';
import { sequelize } from './database/sequelize';

const port = process.env.PORT || 5000;

(async () => {
  await sequelize.sync({ force: true });

  app.listen(port, () =>
    logger.debug(`Server listen on port ${port} in ${STAGE} stage!`),
  );
})();
