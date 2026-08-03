import { DemoCardProps } from "@/types/demo";
import {
    Zap,
    ShieldCheck,
    ChartColumn,
    Users,
} from "lucide-react";

export const HeroFeatureItems: DemoCardProps[] = [
    {
        id: 1,
        icon: Zap,
        title: "Hızlı Kurulum",
        description:
            "Sisteminizi dakikalar içinde kurun ve hemen kullanmaya başlayın.",
        tone: "bg-red-50 text-[#E30611]",
    },
    {
        id: 2,
        icon: ShieldCheck,
        title: "Güvenli Altyapı",
        description:
            "Verileriniz gelişmiş güvenlik standartlarıyla sürekli korunur.",
        tone: "bg-red-50 text-[#E30611]",
    },
    {
        id: 3,
        icon: ChartColumn,
        title: "Akıllı Raporlama",
        description:
            "Anlık raporlar ve analizlerle daha doğru kararlar alın.",
        tone: "bg-red-50 text-[#E30611]",
    },
    {
        id: 4,
        icon: Users,
        title: "Katılımcı Odaklı",
        description:
            "Her etkinlikte katılımcılarınız için güçlü bir deneyim sunun.",
        tone: "bg-red-50 text-[#E30611]",
    },
];