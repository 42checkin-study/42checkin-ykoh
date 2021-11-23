import { app } from './app';
import { logger } from './config/logger';
import { sequelize } from './config/sequelize';

const port = process.env.PORT || 5000;

(async () => {
  await sequelize.sync({ force: true });

  app.listen(port, () => logger.debug(`Server listen on port ${port}`));
})();
