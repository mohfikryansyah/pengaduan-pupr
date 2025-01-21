import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="w-full">
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div> */}

            {/* <div className="mt-6 w-full overflow-hidden sm:max-w-3xl sm:rounded-lg"> */}
                {children}
            {/* </div> */}
        </div>
    );
}
