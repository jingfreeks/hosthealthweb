import '@testing-library/jest-dom'
import 'cross-fetch/polyfill';

jest.mock('next/head', () => {
    const ReactDOMServer = require('react-dom/server')
    return {
      __esModule: true,
      default: ({
        children,
      }) => {
        if (children) {
          global.document.head.insertAdjacentHTML(
            'afterbegin',
            ReactDOMServer.renderToString(children) || ''
          )
        }
        return null
      },
    }
  })
jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    },
    notFound:()=>jest.fn()
  }));