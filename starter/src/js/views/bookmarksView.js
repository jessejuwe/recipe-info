// (THE BOOKMARKS VIEW)

import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet. Bookmark a nice recipe! 💥`;
  _message = `sleep`;

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // prettier-ignore
    return this._data.map(bookmarks => previewView.render(bookmarks, false)).join('');
  }
}

export default new BookmarksView();
