import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import logo from "../assets/unicorn.png";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between bg-[#191B1F] px-4 py-4">
      <div className="flex">
        <img src={logo} alt="" className="w-10 text-white" />
        <Menubar className="bg-[#191B1F] border-none text-[#6C7284] ">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
      <div>
        <Button className="bg-[#1F2128] mr-3">
          Ethereum <ChevronDown />
        </Button>
        <input
          type="text"
          placeholder="Search pools or tokens"
          className="bg-black px-3 py-1 rounded-lg text-[#757575] focus:outline-none focus:border-none"
        />

        <Button className="text-white bg-[#40444F]">...</Button>
      </div>
    </div>
  );
}
export default Header;
