import Header from "../header/header"

interface Props {
  children: JSX.Element | JSX.Element[]
  paddingBottom?: boolean
}

const Layout = ({ children, paddingBottom = false }: Props) => (
  <div className="">
    <Header />

    {children}

    {/* <Footer customClassName={paddingBottom ? 'mt-10' : ''} /> */}
  </div>
)

export default Layout
