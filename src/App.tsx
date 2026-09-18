import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import ProfileCard from "./ProfileCard";

type ProfileCardProps = {
name: string;
role: string;
avatarUrl?: string; // the ? means optional
};

function App() {
  const profileData: ProfileCardProps = {
    name: "Magzhan Kydyralin",
    role: "Software Engineer",
    avatarUrl: "./assets/avatar.jpg"
  };

  return (
    <>
      <body>
        <Header />
        <ProfileCard {...profileData} />
        <Footer />
      </body>
    </>
  );
}

export default App;
