import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.service.createMany({
    data: [
      {
        name: "Mobile Development",
        description:
          "Our skilled developers create cutting-edge mobile applications that cater to the unique needs of your business. From intuitive user interfaces to seamless functionality, we turn ideas into impactful mobile experiences.",
        imageUrl: "mobile-development.png",
        slug: "mobile-development",
        categoryName: "Software Development",
      },
      {
        name: "Web Development",
        description:
          "We create custom, scalable, and secure web applications that are tailored to your business needs. Our team of developers is proficient in the latest web technologies and frameworks.",
        imageUrl: "web-development.png",
        slug: "web-development",
        categoryName: "Software Development",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
