import { SelectList } from "react-native-dropdown-select-list";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Dropdown = () => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Casual" },
    { key: "2", value: "Formale" },
    { key: "4", value: "Business" },
    { key: "5", value: "Sportivo" },
    { key: "6", value: "Boho" },
    { key: "7", value: "Streetwear" },
    { key: "8", value: "Classico" },
    { key: "9", value: "Vintage" },
    { key: "10", value: "Minimalista" },
    { key: "11", value: "Punk" },
    { key: "12", value: "Eclettico" },
    { key: "13", value: "Rocker" },
    { key: "14", value: "Glamour" },
    { key: "15", value: "Artistic" },
    { key: "16", value: "Retro" },
  ];

  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={data}
      search={true}
      save="value"
      arrowicon={<FontAwesome name="chevron-down" size={15} color={"white"} />}
      searchicon={<FontAwesome name="search" size={15} color={"white"} />}
      closeicon={<FontAwesome name="times" size={15} color={"white"} />}
      placeholder="Selezionare stile desiderato:"
      notFoundText="Nessun risultato trovato"
      placeholderStyle={{ color: "#fff" }}
      defaultValue={selected}
      boxStyles={{
        width: 320,
        borderRadius: 15,
        backgroundColor: "#1a0047",
        borderColor: "#1a0047",
      }}
      inputStyles={{
        color: "#fff",
        fontSize: 16,
        fontFamily: "PPneuemachinaRegular",
        marginLeft: 10,
      }}
      dropdownStyles={{
        width: 320,
        borderRadius: 20,
        backgroundColor: "#fff",
        borderColor: "#fff",
      }}
      dropdownTextStyles={{
        color: "#1a0047",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "FoundersGroteskRegular",
      }}
      dropdownItemStyles={{
        color: "#1a0047",
      }}
    />
  );
};

export { Dropdown };
