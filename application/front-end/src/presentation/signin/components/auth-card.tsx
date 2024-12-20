import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card';
import { Separator } from '@/presentation/components/ui/separator';
import { OauthButton } from './oauth-button';
import { cn } from '@/config/libs/utils';
import { PATH } from '@common/constants';

type AuthCardProperties = {
  title: string;
  description: string;
};

export const AuthCard = ({ title, description }: AuthCardProperties) => {
  return (
    <Card
      className={cn('m-auto h-max w-[380px] space-y-4', '[&]:border-0 [&]:shadow-none', 'sm:[&]:border sm:[&]:shadow')}
    >
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <OauthButton provider={'gmail'} />
        <Separator />
        <OauthButton provider={'github'} />
      </CardContent>
      <CardFooter>
        <Link href={PATH.HOME} className="text-sm text-gray-500 hover:underline">
          Retourner à l&apos;accueil
        </Link>
      </CardFooter>
    </Card>
  );
};
