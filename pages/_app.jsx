import 'tailwindcss/tailwind.css'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import MiniCart from "../components/MiniCart";
import Header from "../components/Header";
import { SessionProvider } from 'next-auth/react';

const queryClient = new QueryClient()

function MyApp({Component, pageProps: { session, ...pageProps }}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Header />
          {/*<MiniCart/>*/}
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false}/>
        </SessionProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
