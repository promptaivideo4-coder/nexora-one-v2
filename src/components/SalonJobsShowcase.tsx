import type { ReactNode } from 'react';
import { BriefcaseBusiness, Check, ChevronDown, UsersRound } from 'lucide-react';
import { GlassCard } from './common/GlassCard';
import { PRODUCTS_DATA } from '../data/products';

const portal = PRODUCTS_DATA.find(product => product.id === 'salon-jobs')!.demoUrl!;
const assets = '/images/nexora-salon-jobs';
const ownerPath = portal + '#employers';
const professionalPath = portal + '#jobs';
const assistedPath = portal + '#assisted-hiring';

const roles = [
  ['Hair Stylist', 'hair-stylist'], ['Barber', 'barber'], ['Beautician', 'beautician'],
  ['Makeup Artist', 'makeup-artist'], ['Bridal Makeup Artist', 'bridal-makeup'],
  ['Nail Technician', 'nail-technician'], ['Spa Therapist', 'spa-therapist'],
  ['Skin Care Specialist', 'skin-care'], ['Hair Colourist', 'hair-colourist'],
  ['Salon Manager', 'salon-manager'], ['Salon Receptionist', 'receptionist'],
  ['Salon Assistant', 'salon-assistant'],
];

const audiences = [
  {
    title: 'Salon Owners', image: 'owner-hiring', alt: 'Salon owner interviewing a beauty professional',
    icon: BriefcaseBusiness, href: ownerPath, action: 'Join as Salon Owner – Free',
    benefits: [
      'Post vacancies with role category, skills, city and salary requirements.',
      'Discover opted-in professional profiles by category, city, experience and skills.',
      'Manage applications and review candidates from your employer account.',
      'Request Assisted Hiring when you need help with screening or coordination.',
    ],
    steps: ['Register', 'Complete profile', 'Post a job', 'Discover candidates', 'Review applications', 'Shortlist', 'Make your hiring decision'],
    instructions: 'On the portal, choose Register, then “I’m a salon employer”.',
  },
  {
    title: 'Beauty Professionals', image: 'professional-team', alt: 'Indian beauty professionals at a salon',
    icon: UsersRound, href: professionalPath, action: 'Join as Beauty Professional – Free',
    benefits: [
      'Register and create a professional profile with your skills and experience.',
      'Find openings by job category or city and compare role requirements.',
      'Apply to openings and check “My Profile & Applications” after signing in.',
      'Use the portal in English or Hindi and access its Android APK.',
    ],
    steps: ['Register', 'Create your profile', 'Explore jobs', 'Select an opportunity', 'Apply', 'Track your application', 'Connect with the employer'],
    instructions: 'On the portal, choose Register, then “I’m a job seeker”.',
  },
];

const screens = [
  ['Find Jobs', 'find-jobs', '#jobs', 'Search by role and city with filters for salary, experience and benefits.'],
  ['Browse Profiles', 'browse-profiles', '#candidates', 'The discovery screen shows the employer-profile requirement to guests.'],
  ['Post a Job', 'post-a-job', '#employers', 'The public employer entry opens account creation before job posting.'],
  ['My Profile & Applications', 'applications', '#dashboard', 'The account dashboard opens after sign-in.'],
  ['Assisted Hiring', 'assisted-hiring-screen', '#assisted-hiring', 'The public overview explains how to request recruitment support.'],
];

const faqs = [
  ['How do I register?', 'Open the portal, select Register, and choose “I’m a job seeker” or “I’m a salon employer”. Account creation uses an email address and password.'],
  ['Is joining free?', 'Both roles can start with free account registration. Assisted Hiring scope and any charges are confirmed after review.'],
  ['How do salon owners post a job?', 'Open For Employers, select Post a Job and register or sign in. Add the role, city, skills and salary details before submitting the listing.'],
  ['How can I find suitable vacancies?', 'Open Find Jobs and search by role, salon, skill or location. Use the profile, salary, experience and benefits filters to narrow the results.'],
  ['How do I apply and check my applications?', 'Open an available listing, sign in and follow its application steps. Return to My Profile & Applications to review your activity.'],
  ['What does Assisted Hiring cover?', 'Depending on the scope agreed after review, support can include screening, shortlisting, interview coordination and joining follow-up. Hiring outcomes and timelines vary.'],
  ['Is there an Android app?', 'Yes. Open the portal and use its Download Android APK link. The web portal offers English and Hindi.'],
];

const goldButton = 'inline-flex min-h-11 items-center justify-center rounded-xl bg-[#edcd76] px-4 py-2.5 text-center text-sm font-bold text-[#1a130b] transition-colors hover:bg-[#ffe6a2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#edcd76]';
const outlineButton = 'inline-flex min-h-11 items-center justify-center rounded-xl border border-[#f4d03f]/45 px-4 py-2.5 text-center text-sm font-semibold text-[#f6df9d] transition-colors hover:bg-[#f4d03f]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#edcd76]';
const heading = 'font-serif text-2xl font-bold sm:text-4xl';
const copy = 'text-base leading-relaxed text-[#e5d9ca]';
const eyebrow = 'text-sm font-semibold uppercase tracking-widest text-[#edcd76]';

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`inline-flex max-w-full items-center gap-1.5 rounded-md border border-[#edcd76]/35 bg-[#100d0b] px-2 py-1 font-serif font-bold text-[#f5dc97] ${compact ? 'text-xs' : 'text-sm'}`}>
      <img src="/favicon.svg" alt="" width="20" height="20" className="size-5 shrink-0" />
      NEXORA ONE
    </span>
  );
}

function Photo({ image, alt, shape, compact }: { image: string; alt: string; shape: string; compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-[#edcd76]/25 bg-[#1e1711] ${shape}`}>
      <img src={`${assets}/${image}.webp`} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
      <span className="absolute bottom-2 left-2"><BrandMark compact={compact} /></span>
    </div>
  );
}

function JoinLinks() {
  return (
    <div className="flex flex-col flex-wrap gap-2 sm:flex-row">
      <a href={ownerPath} className={goldButton}>{audiences[0].action}</a>
      <a href={professionalPath} className={outlineButton}>{audiences[1].action}</a>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return <div className="space-y-4"><h3 className={heading}>{title}</h3>{children}</div>;
}

export function SalonJobsShowcase() {
  return (
    <section id="salon-jobs" aria-labelledby="salon-jobs-title" className="scroll-mt-24 border-y border-[#edcd76]/25 bg-[#100d0b] text-[#fff6e9]">
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className={eyebrow}>NEXORA SALON JOBS</p>
            <h2 id="salon-jobs-title" className="font-serif text-3xl font-bold leading-tight sm:text-5xl">Salon Ko Chahiye Achhi Team, Professional Ko Chahiye Achha Career!</h2>
            <p className={copy}>Nexora Salon Jobs ek digital platform hai jahan Salon Owners apne salon ke liye skilled staff discover kar sakte hain aur Beauty Professionals apne skills ke according job opportunities explore kar sakte hain.</p>
            <JoinLinks />
            <p className="text-sm text-[#e5d9ca]">Portal par Register select karke apna role chuniye.</p>
          </div>
          <Photo image="hero" alt="Indian salon owner with a team of beauty professionals" shape="aspect-video" />
        </div>

        <Block title="What Is Nexora Salon Jobs?">
          <p className={copy}>Salon owners publish vacancies and discover opted-in professionals. Hair stylists, beauticians, barbers, makeup artists, nail technicians, spa therapists and salon managers use the same portal to explore openings and make their skills discoverable.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {audiences.map(({ title, icon: Icon, image, alt, benefits, href, action, instructions }) => (
              <GlassCard key={title} className="min-w-0 space-y-4 border-[#edcd76]/25 p-4 sm:p-6">
                <Photo image={image} alt={alt} shape="aspect-video" />
                <h4 className="flex items-center gap-2 font-serif text-2xl font-bold"><Icon aria-hidden="true" className="size-5 shrink-0 text-[#edcd76]" />{title}</h4>
                <ul className="space-y-2">
                  {benefits.map(benefit => <li key={benefit} className={`flex items-start gap-2 ${copy}`}><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#edcd76]" />{benefit}</li>)}
                </ul>
                <a href={href} className={outlineButton}>{action}</a>
                <p className="text-sm text-[#e5d9ca]">{instructions}</p>
              </GlassCard>
            ))}
          </div>
        </Block>

        <Block title="How It Works">
          <div className="grid gap-4 md:grid-cols-2">
            {audiences.map(({ title, steps }) => (
              <GlassCard key={title} className="border-[#edcd76]/25 p-5 sm:p-6">
                <h4 className="mb-3 font-serif text-xl font-bold">{title} Journey</h4>
                <ol className="space-y-1">
                  {steps.map((step, index) => <li key={step} className="flex min-h-9 items-center gap-3"><span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-[#edcd76]/45 text-sm font-semibold text-[#edcd76]">{index + 1}</span>{step}</li>)}
                </ol>
              </GlassCard>
            ))}
          </div>
        </Block>

        <Block title="Salon Job Categories">
          <p className={copy}>Explore these beauty-industry roles. Current openings and category labels are listed in the portal.</p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {roles.map(([title, image]) => (
              <li key={image} className="min-w-0 rounded-xl border border-[#edcd76]/25 bg-[#1d1711] p-2">
                <Photo image={image} alt="" shape="aspect-square" compact />
                <h4 className="break-words px-1 py-2 text-sm font-semibold sm:text-base">{title}</h4>
              </li>
            ))}
          </ul>
          <a className={outlineButton} href={professionalPath}>Browse actual openings</a>
        </Block>

        <div className="grid items-center gap-5 rounded-2xl border border-[#edcd76]/25 bg-[#1c1510] p-4 md:grid-cols-2 sm:p-6">
          <div className="space-y-3">
            <h3 className={heading}>Assisted Hiring</h3>
            <p className={copy}>Tell Nexora which staff you need and where. The team reviews your request, confirms availability, scope and any charges, and agrees which support to provide.</p>
            <ol className={`list-inside list-decimal space-y-1 ${copy}`}>
              <li>Share your role, location and staffing requirements.</li>
              <li>Discuss screening, shortlisting or interview coordination.</li>
              <li>Review suitable candidates and make your hiring decision.</li>
            </ol>
            <a href={assistedPath} className={goldButton}>Explore Assisted Hiring</a>
          </div>
          <Photo image="assisted-hiring" alt="A recruitment coordinator discusses staffing with a salon owner" shape="aspect-video" />
        </div>

        <Block title="Inside the Salon Jobs Portal">
          <div className="grid gap-4 md:grid-cols-2">
            {screens.map(([title, image, hash, description]) => (
              <figure key={image} className="min-w-0 rounded-2xl border border-[#edcd76]/25 bg-[#1c1510] p-3">
                <div className="overflow-hidden rounded-lg border border-[#edcd76]/30 bg-black">
                  <div className="p-2"><BrandMark compact /></div>
                  <a href={`${assets}/${image}.webp`} target="_blank" rel="noreferrer" aria-label={`Open full ${title} screenshot`}>
                    <img src={`${assets}/${image}.webp`} alt={`Actual Nexora Salon Jobs portal: ${title}`} loading="lazy" decoding="async" width="1100" height="756" className="h-auto w-full" />
                  </a>
                </div>
                <figcaption className="px-1 pt-3">
                  <a className="font-semibold text-[#edcd76] underline underline-offset-4" href={portal + hash}>{title}</a>
                  <p className="mt-1 text-sm text-[#e5d9ca]">{description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Block>

        <Block title="Both Can Join Nexora for Free">
          <p className={copy}>Free joining covers account registration. Any charges for Assisted Hiring are confirmed after review.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {([
              ['career-growth', 'Salon professionals developing their skills', 'Salon Owners', 'Join Nexora and explore salon hiring opportunities.'],
              ['mobile-promotion', 'Beauty professional using a phone in a salon', 'Beauty Professionals', 'Join Nexora and discover new career opportunities.'],
            ]).map(([image, alt, title, description], index) => (
              <GlassCard key={title} className="space-y-3 border-[#edcd76]/25 p-4">
                <Photo image={image} alt={alt} shape="aspect-[4/5] max-h-72" />
                <h4 className="font-serif text-2xl font-bold">{title}</h4>
                <p className={copy}>{description}</p>
                <a href={audiences[index].href} className={outlineButton}>{audiences[index].action}</a>
              </GlassCard>
            ))}
          </div>
        </Block>

        <Block title="Salon Jobs FAQ">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-xl border border-[#edcd76]/25 bg-[#1c1510]">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-semibold focus-visible:outline focus-visible:outline-[#edcd76] [&::-webkit-details-marker]:hidden">
                {question}<ChevronDown aria-hidden="true" className="size-5 shrink-0 text-[#edcd76] transition-transform group-open:rotate-180 motion-reduce:transition-none" />
              </summary>
              <p className={`px-4 pb-4 ${copy}`}>{answer}</p>
            </details>
          ))}
        </Block>

        <div className="space-y-4 rounded-2xl border border-[#edcd76]/35 bg-[#231810] p-5 sm:p-8">
          <h3 className={heading}>Beauty Industry Ko Digital Banane Mein Nexora Ke Saath Judiye!</h3>
          <JoinLinks />
        </div>
      </div>
    </section>
  );
}
