'use babel';

import OxfordDateView from './oxford-date-view';

export default {

  consumeStatusBar(statusBar) {
    this.contentView = new OxfordDateView(statusBar)
  },

  deactivate() {
    this.contentView.destroy()
  }
};
