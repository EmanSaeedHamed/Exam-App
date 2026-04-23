'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

type Props = {
  diplomaTitle?: string;
};

export function BreadCrumb({ diplomaTitle }: Props) {
  const pathname = usePathname();
  const params = useParams();

  const isActive = (path: string) => pathname === path;

  const diplomaPath = `/diplomas/${params.id}`;
  const isExamsPage = pathname.includes("/exams");

  return (
    <Breadcrumb className="p-3">
      <BreadcrumbList>
        {/* Diplomas */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/diplomas"
              className={`${isActive("/diplomas")
                ? "text-blue-600"
                : "text-gray-400"
                } font-mono`}
            >
              Diplomas
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Diploma */}
        {(params.id) && (
          <>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              {isExamsPage ? (
                <BreadcrumbLink asChild>
                  <Link
                    href={diplomaPath}
                    className={`${isActive(diplomaPath)
                      ? "text-blue-600"
                      : "text-gray-400"
                      } font-mono`}
                  >
                    {diplomaTitle ?? "Diploma"}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage
                  className={`${isActive(diplomaPath)
                    ? "text-blue-600"
                    : "text-gray-400"
                    } font-mono`}
                >
                  {diplomaTitle ?? "Diploma"}
                </BreadcrumbPage>

              )}
            </BreadcrumbItem>
          </>
        )}

        {/* Exams */}
        {isExamsPage && (
          <>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-blue-600">
                Exams
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
