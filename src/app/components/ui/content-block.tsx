import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  content: {
    title: string;
    body: string;
    href: string;
  };
};

export const ContentBlock = ({ content }: Props) => {
  const { href, title, body } = content;

  return (
    <Link href={href}>
      <Card size="sm" variant="outline">
        <CardHeader>{title}</CardHeader>
        <CardBody>{body}</CardBody>
      </Card>
    </Link>
  );
};
