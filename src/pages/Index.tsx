import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const rooms = [
    {
      name: "Гостиная",
      description: "Диваны, кресла, столы, декор",
      image: "/img/1a318abb-2113-459a-a9cd-51a009f25d13.jpg",
      icon: "Sofa",
    },
    {
      name: "Спальня",
      description: "Кровати, шкафы, прикроватные тумбы",
      image: "/img/87fd2b5d-8a28-4458-8e48-6d550c054328.jpg",
      icon: "Bed",
    },
    {
      name: "Кухня",
      description: "Столы, стулья, барные стойки",
      image: "/img/d4cf18df-5de2-4e93-aefc-500d41db3b82.jpg",
      icon: "ChefHat",
    },
  ];

  const services = [
    {
      title: "3D Визуализация",
      description: "Посмотрите как мебель будет выглядеть в вашем интерьере",
      icon: "Cube",
    },
    {
      title: "Доставка",
      description: "Быстрая доставка по всему городу",
      icon: "Truck",
    },
    {
      title: "Сборка",
      description: "Профессиональная сборка мебели",
      icon: "Wrench",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Montserrat']">
            Все для дома
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-['Open_Sans']">
            Современная мебель и декор с 3D-визуализацией для вашего идеального
            дома
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3"
            >
              3D Примерка
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Catalog */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-['Montserrat']">
            Каталог по комнатам
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Icon
                      name={room.icon}
                      size={24}
                      className="text-orange-500"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-['Montserrat'] text-gray-800">
                    {room.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-['Open_Sans']">
                    {room.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
                    Смотреть товары
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-['Montserrat']">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-2xl font-['Montserrat'] text-gray-800">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-['Open_Sans']">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 font-['Montserrat']">
            О компании
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-['Open_Sans']">
            Мы создаем уютные и стильные интерьеры уже более 10 лет. Наша
            команда профессионалов поможет вам выбрать идеальную мебель и декор
            для вашего дома.
          </p>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Товаров в каталоге</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">
                Все для дома
              </h3>
              <p className="text-gray-400 font-['Open_Sans']">
                Современная мебель и декор для вашего идеального дома
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Гостиная</li>
                <li>Спальня</li>
                <li>Кухня</li>
                <li>Ванная</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>3D Визуализация</li>
                <li>Доставка</li>
                <li>Сборка</li>
                <li>Дизайн интерьера</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="text-gray-400 space-y-2">
                <p>📞 +7 (999) 123-45-67</p>
                <p>📧 info@dom-store.ru</p>
                <p>📍 г. Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Все для дома. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
