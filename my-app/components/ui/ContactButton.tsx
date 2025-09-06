import { Button } from "./button"

export default function ContactButton() {
  return (
    <div className="contact-button">
      <Button className="text-white py-5 bg-(--clr-primary) 
      hover:bg-(--clr-primary) cursor-pointer">
        Contact Us
      </Button>
    </div>
  )
}