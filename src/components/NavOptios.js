import React, {useState, useEffect} from "react";
import Navcard from "./NavCard.js";
import "../styles/NavOptios.css"


const NavOptios = ({
  xiaomiPhones,
  redmiPhones,
  tV,
  laptops,
  fitness_Lifestyle,
  home,
  audio,
  accessories
}) => {
  const [xiaomiPhonesToggle, setxiaomiPhonesToggle] = useState(false);
  const [redmiPhoneToggle, setredmiPhoneToggle] = useState(false);
  const [tvToggle, settvToggle] = useState(false);
  const [laptopsToggle, setlaptopsToggle] = useState(false);
  const [fitness_LifestyleToggle, setfitness_LifestyleToggle] = useState(false);
  const [homeToggle, sethomeToggle] = useState(false);
  const [audioToggle, setaudioToggle] = useState(false);
  const [accessoriesToggle, setaccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones") {
      return setxiaomiPhonesToggle(true);
    }

    else if (window.location.pathname === "/redmiphones") {
      return setredmiPhoneToggle(true);
    } else if (window.location.pathname === "/tv") {
      return settvToggle(true);
    } else if (window.location.pathname === "/laptops") {
      return setlaptopsToggle(true);
    } else if (window.location.pathname === "/lifestyle") {
      return setfitness_LifestyleToggle(true);
    } else if (window.location.pathname === "/home") {
      return sethomeToggle(true);
    } else if (window.location.pathname === "/audio") {
      return setaudioToggle(true);
    } else if (window.location.pathname === "/accessories") {
      return setaccessoriesToggle(true);
    }
  }, [])
  
  return (
    <div className="navOptions">
      {xiaomiPhonesToggle
        ? xiaomiPhones.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {redmiPhoneToggle
        ? redmiPhones.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {tvToggle
        ? tV.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {laptopsToggle
        ? laptops.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {fitness_LifestyleToggle
        ? fitness_Lifestyle.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {homeToggle
        ? home.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {audioToggle
        ? audio.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {accessoriesToggle
        ? accessories.map((item) => (
            <Navcard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptios;
