import 'tailwindcss/tailwind.css'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient()

function MyApp({Component, pageProps}) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
