import { Outlet } from "react-router";
// import { useNavigation } from "react-router";
import MainNavigation from "../components/MainNavigation";
function RootLayout() {
  // const navigation = useNavigation()
  return (
    <>
      <MainNavigation></MainNavigation>
      {/* { navigation.state === 'loading' && <p>Loading...</p> } */}
      <Outlet />
    </>
  );
}

export default RootLayout;
