import { SelectList } from "react-native-dropdown-select-list";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Dropdown = () => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Uomo" },
    { key: "2", value: "Donna" },
    { key: "3", value: "Unisex" },
  ];

  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={data}
      search={false}
      save="value"
      arrowicon={<FontAwesome name="chevron-down" size={18} color={"white"} />}
      searchicon={<FontAwesome name="search" size={18} color={"white"} />}
      closeicon={<FontAwesome name="times" size={18} color={"white"} />}
      searchPlaceholder="Cerca"
      placeholder="Seleziona il tuo genere"
      defaultValue={selected}
      notFoundText="Nessun risultato"
      boxStyles={{
        width: 320,
        borderRadius: 20,
        backgroundColor: "#1a0047",
        borderColor: "#1a0047",
      }}
      inputStyles={{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      }}
      dropdownStyles={{
        width: 320,
        borderRadius: 20,
        backgroundColor: "#1a0047",
        height: "auto",
        borderColor: "#1a0047",
      }}
      dropdownTextStyles={{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      }}
      dropdownItemStyles={{
        backgroundColor: "#1a0047",
      }}
    />
  );
};

export { Dropdown };
