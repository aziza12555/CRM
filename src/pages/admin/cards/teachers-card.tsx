import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Shawn Stone",
    role: "UI/UX Designer",
    level: "Middle",
    img: "",
  },
  {
    name: "Randy Delgado",
    role: "UI/UX Designer",
    level: "Junior",
    img: "",
  },
  {
    name: "Emily Tyler",
    role: "Copywriter",
    level: "Middle",
    img: "",
  },
  {
    name: "Louis Castro",
    role: "Copywriter",
    level: "Senior",
    img: "",
  },
];

export default function WorkloadSection() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Workload
        </h2>
        <a
          href="/admin/teachers"
          className="text-blue-500 dark:text-blue-400 hover:underline text-sm mr-5"
        >
          View all →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {team.map((person, index) => (
          <Card
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md 
                       bg-white dark:bg-gray-800 transition-colors"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-400 mb-4">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-0">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {person.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {person.role}
              </p>
              <Badge
                variant="outline"
                className="text-xs border-gray-300 dark:border-gray-600 
                           text-gray-700 dark:text-gray-300"
              >
                {person.level}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
