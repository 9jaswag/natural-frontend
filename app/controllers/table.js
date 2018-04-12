
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionBack() {
      this.get('model.database').then((database) => {
        this.transitionToRoute('tables', database.id);
      });
    }
  }
});
