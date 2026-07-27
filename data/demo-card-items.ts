import { DemoCardProps } from "@/types/demo-card";
import {
    Gift,
    Clock3,
    Globe,
    Users ,
} from "lucide-react" 

export const DemoCardItems : DemoCardProps[] = [
    {
    id: 1,
    icon: Gift,
    title: "Ücretsiz Demo",
    description: "Platformu herhangi bir ücret ödemeden inceleyin.",
    tone: "red",
  },
  {
    id: 2,
    icon: Clock3,
    title: "Ortalama 20 Dakika",
    description: "Kısa ve verimli bir ürün tanıtım süreci.",
    tone: "blue",
  },
  {
    id: 3,
    icon: Globe,
    title: "Kurulum Gerektirmez",
    description: "Web tabanlı yapısı sayesinde hemen kullanmaya başlayın.",
    tone: "blue",
  },
  {
    id: 4,
    icon: Users,
    title: "Uzman Ekip Sunumu",
    description:
      "İhtiyaçlarınıza göre kişiselleştirilmiş ürün tanıtımı ve soru-cevap oturumu.",
    tone: "red",
  },
] 