import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@/i18n/navigation";

interface ServiceBreadcrumbProps {
  category: string;
  slug: string;
}

export const ServiceBreadcrumb = ({
  category,
  slug,
}: ServiceBreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/" className="text-gray-400">
            خانه
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400" />
        <BreadcrumbItem>
          <Link href="/services" className="text-gray-400">
            خدمات
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400" />
        <BreadcrumbItem>
          <Link href={`/services/${slug}`} className="text-gray-400">
            {category}
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
