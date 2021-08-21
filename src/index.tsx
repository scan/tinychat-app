import * as ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/client';

import App from './components/App';
import theme from './theme';
import client from './api/client';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <CssBaseline />
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
