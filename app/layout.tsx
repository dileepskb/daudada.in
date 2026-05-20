// import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      
    >
      <head>

    {/* Google Tag Manager */}

    <Script
      id="google-tag-manager"

      strategy="afterInteractive"
    >
      {`
        (function(w,d,s,l,i){
          w[l]=w[l]||[];

          w[l].push({
            'gtm.start':
            new Date().getTime(),
            event:'gtm.js'
          });

          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),
          dl=l!='dataLayer'?'&l='+l:'';

          j.async=true;

          j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;

          f.parentNode.insertBefore(j,f);

        })(window,document,'script','dataLayer','GTM-T25HKBDD');
      `}
    </Script>
{/* <!-- End Google Tag Manager --> */}
{/* <!-- Google analytics tag (gtag.js) --> */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-RL51WQ4FYP"

  strategy="afterInteractive"
/>

<Script
  id="google-analytics"

  strategy="afterInteractive"
>
  {`
    window.dataLayer =
      window.dataLayer || [];

    function gtag(){
      dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag(
      'config',
      'G-RL51WQ4FYP'
    );
  `}
</Script>

  </head>
   
      <body 
      // className={cn(inter.variable, "font-sans")}
      >
{/* <!-- Google Tag Manager (noscript) --> */}



 {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '876032862185530');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=876032862185530&ev=PageView&noscript=1"
          />
        </noscript>
<noscript>

      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-T25HKBDD"

        height="0"

        width="0"

        style={{
          display: "none",
          visibility: "hidden",
        }}
      />

    </noscript>
    {/* <!-- End Google Tag Manager (noscript) --> */}

       
        <ThemeProvider>
          <TooltipProvider>
           
            {children}
        
            </TooltipProvider>
        </ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
