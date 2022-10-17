
import Logo from "../../assets/logoeva.png";
import Select from "react-select";
import * as C from "../../home/styles";

const options = [
  { value: "chocolate", label: "Livros" },
  { value: "strawberry", label: "Escritório" },
  { value: "vanilla", label: "Vestuário" },
  { value: "vanilla", label: "Informática" },
];


export default function Header() {
  return (
    <C.Header>
      <img src={Logo} alt="" />
      <Select options={options} />
      <C.InputHeader type="text" />
      <div className="divHeaderCart">
        <C.AHeader href="">Minha conta</C.AHeader>
        <C.FaaUser />
        <C.AHeader href="">Carrinho</C.AHeader>
        <C.Cart />
      </div>
    </C.Header>
  )
}