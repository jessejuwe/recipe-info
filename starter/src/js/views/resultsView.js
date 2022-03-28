// (THE RESULTS VIEW)

import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `Recipe not found for your query. Please try another one! 💥`;
  _message = `sleep`;

  _generateMarkup() {
    // prettier-ignore
    return this._data.map(results => previewView.render(results, false)).join('');
  }
}

export default new ResultsView();
