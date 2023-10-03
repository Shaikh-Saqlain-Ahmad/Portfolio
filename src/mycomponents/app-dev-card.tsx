
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "@/mycomponents/my-style.css";
import logo from "@/assets/flutter-logo.png"; 

const notifications = [
  {
    title: "Flutter",
  },
  {
    title: "Dart",
  },
  {
    title: "Firebase",
  },
  {
    title: "State Management(Provider/Bloc)",
  },
];

function AppCard() {
  return (
    <Card className="half-width-card">
      <CardHeader>
        <CardTitle>App Development</CardTitle>
        <CardDescription>Using Flutter & Dart</CardDescription>
      </CardHeader>
      <CardContent className="scroll-m-20 text-xl font-semibold tracking-tight">
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 " />
            <div className="space-y-1">
            <div style={{ textAlign: "center" }}>
  <img
    src={logo}
    alt="Small Image"
    className="mx-2"
    style={{ maxWidth: "50px", display: "block", margin: "0 auto" }}
  />
</div>

              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center">
                  
                  <p className="text-sm font-medium leading-none ">{notification.title}</p>
                  <br></br>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default AppCard;
