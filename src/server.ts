import { app } from './app';
import { sequelize } from './database/sequelize';

const port = process.env.PORT || 5000;

(async () => {
  await sequelize.sync({ force: true });

  app.listen(port, () => console.log(`Server listen on port ${port}`));
})();
