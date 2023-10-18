import ProjectCard from "@/components/ui/card-with-image";
import image from "@/assets/python.jpeg";

export function PythonCard() {
  return (
    <ProjectCard imgSource={image } heading="Photoshop Automation" text="This project demonstrates the integration of Python programming
    and Adobe Photoshop for automating text and image processes. By
    combining the capabilities of both tools, the project streamlines
    tasks such as personalized graphic generation, consistent text overlay, and automated image editing."></ProjectCard>
  );
}
export default PythonCard
