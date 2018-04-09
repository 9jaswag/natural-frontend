import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionBack() {
      this.get('model.firstObject.database').then((database) => {
        database.get('project').then((project) => {
          this.transitionToRoute('databases', project.id);
        });
      });
    }
  }
});
