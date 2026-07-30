import { Feature } from "@/types/features";
import{UsersRound,Ticket,Users,CalendarClock,ListTodo,BarChart,UserRoundCheck,Layers,SquareMousePointer} from "lucide-react";
export const features:Feature[] = [
  {
    id:1,
    icon: UsersRound,
    title:"Katılımcı Yönetimi",
    description:"Davetli listelerini dijital ortama taşıyarak, iletişim süreçlerini e-posta ve WhatsApp üzerinden tek bir panelden yönetmenizi sağlıyoruz"
  },
  {
    id:2,
    icon: Ticket,
    title:"Yerleşim Planı",
    description:"Oturma düzenini sistem üzerinden kurgulayarak, karmaşık yerleşim süreçlerini hatasız ve hızlı bir şekilde tamamlamanıza imkan tanıyoruz."
  }
  ,
  {
    id:3,
    icon:SquareMousePointer,
    title: "Kontenjan Yönetimi",
    description:
      "Etkinlik kapasitesini sisteme tanımlayıp doluluk oranlarını gerçek zamanlı izleyerek, limit aşımlarının önüne geçiyoruz.",
  },
  {
   
    id:4,
    icon: CalendarClock,
    title:"Tarih ve Seans Yönetimi",
    description:"Entegre takvim altyapısını kullanarak, farklı tarih ve saatlerdeki oturumları çakışma yaşamadan planlamanızı sağlıyoruz."
  },
  {
   
    id:5,
    icon: ListTodo,
    title:"Organizasyon Takibi",
    description:"Program akışını ve lojistik detayları merkezi bir yapıda toplayarak, etkinlik süreçlerinizi gerçek zamanlı takip etmenize olanak tanıyoruz"
  },
{
   
    id:6,
    icon: BarChart,
    title:"Raporlama ve Analiz",
    description:"Tüm etkinlik verilerini tek bir platformda birleştirerek, stratejik kararlarınızı destekleyecek detaylı raporlar sunuyoruz.  "
  },
{
   
    id:7,
    icon: UserRoundCheck,
    title:"Kullanıcı Yetkilendirme",
    description:"Sistem içinde ekibinize özel erişim yetkileri tanımlayarak, katılımcı ve organizasyon verilerinizi yüksek güvenlik standartlarında koruyoruz  "
  },
{
   
    id:8,
    icon: Layers,
    title:"Çoklu Etkinlik Yönetimi",
    description:"Farklı organizasyonlarınızı aynı panel üzerinde birleştirerek, operasyonel yönetim süreçlerinizi hızlandırıyor ve iş yükünüzü azaltıyoruz. "
  }

];