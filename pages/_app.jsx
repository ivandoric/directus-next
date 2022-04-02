import 'tailwindcss/tailwind.css'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import MiniCart from "../components/MiniCart";
import Header from "../components/Header";

const queryClient = new QueryClient()

function MyApp({Component, pageProps}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        {/*<MiniCart/>*/}
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
