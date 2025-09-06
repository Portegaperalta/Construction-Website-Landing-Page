import SelectLanguage from "./SelectLanguage";
import ContactButton from "./ui/ContactButton";

export default function HeaderOptions() {
  return (
    <div className="header-options">
      <SelectLanguage />
      <ContactButton />
    </div>
  )
}