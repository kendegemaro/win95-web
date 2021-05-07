'use strict';
function Explorer(app, states) {
  const that = this;

  const itemWrapper = app.querySelector('.body > .file-viewer > .file-items');
  const titleText = app.querySelector('.header > .title > .text');

  // ------- Init -------
  const viewer = new FileViewer(itemWrapper, states.path);
  that.viewer = viewer;
  titleText.textContent = ['C:', ...viewer.path].join('\\') + '\\';
}
