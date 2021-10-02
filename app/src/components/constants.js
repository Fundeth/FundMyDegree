export const schoolOptions = [
    { value: "Purdue University", label: "Purdoo" },
    { value: "Binghampton University", label: "Bingbing" },
    { value: "Boston University", label: "Buston" },
  ];

export const majorOptions = [
    { value: "Electrical Engineering", label: "el" },
    { value: "Chemical Engineering", label: "chem" },
    { value: "Psychology", label: "psy" },
  ];
  
  
export const customStyles = {
control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "0",
    boxShadow: "none",
}),
placeholder: (defaultStyles) => {
    return {
    ...defaultStyles,
    color: "#edfdf4",
    margin: "auto",
    };
},
menu: (styles) => ({
    ...styles,
    backgroundColor: "#ffffff",
    border: "1",
    boxShadow: "none",
}),
};
