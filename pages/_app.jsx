import 'tailwindcss/tailwind.css'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import MiniCart from "../components/MiniCart";

const queryClient = new QueryClient()

function MyApp({Component, pageProps}) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <MiniCart />
                <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
