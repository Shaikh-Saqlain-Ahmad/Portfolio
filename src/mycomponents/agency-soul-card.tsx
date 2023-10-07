import ProjectCard from "@/components/ui/card-with-image";
import image from "@/assets/agency-soul.png";

export function AgencySoulCard() {
  return (
    <ProjectCard imgSource={image} heading="Agency Soul" text="AgencySoul is aim to help Ecommerce agencies specifically in Pakistan, streamline their operations by providing a central
    platform to manage clients, projects, inventory, accounting, and
    human resources. With multi-currency support, our app enables agencies to conduct business globally and seamlessly manage finances across different currencies."></ProjectCard>
  );
}
export default AgencySoulCard;
