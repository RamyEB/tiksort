import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import videoMiddleware from './middleware/videoMiddleware';

const productMode = (env) => {
  const middlewareEnhancer = applyMiddleware(videoMiddleware, ReduxThunk);

  /*
  if (env !== 'production') {
    return createStore(
      reducers,
      compose(
        middlewareEnhancer,
        window.devToolsExtension && window.devToolsExtension()
      )
    );
  }
  */

  return createStore(
    reducers,
    compose(middlewareEnhancer)
  );
};

export default productMode(process.env.NODE_ENV);
