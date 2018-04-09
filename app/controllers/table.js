import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionBack() {
      this.transitionToRoute('tables', this.model.databaseId);
    }
  }
});
