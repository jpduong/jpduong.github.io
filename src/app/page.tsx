import { Header } from "./components/header";
import { Photos } from "./components/photos";
import { Posts } from "./components/posts";

export default function Home() {
  return (
    <>
      <Header />
      <Posts />
      <Photos />
    </>
  );
}
