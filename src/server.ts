import { app } from './app';
import { logger } from './config/logger';
import { STAGE } from './config/secrets';
import { sequelize } from './database/sequelize';

(async () => {
  await sequelize.sync({ force: false });

  app.listen(app.get('port'), () =>
    logger.debug(`Server listen on port ${app.get('port')} in ${STAGE} stage!`),
  );
})();
