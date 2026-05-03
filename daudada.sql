--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8 (Homebrew)
-- Dumped by pg_dump version 16.8 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: LeadStatus; Type: TYPE; Schema: public; Owner: dileepkumar
--

CREATE TYPE public."LeadStatus" AS ENUM (
    'NEW',
    'CONTACTED',
    'QUALIFIED',
    'NEGOTIATION',
    'WON',
    'LOST'
);


ALTER TYPE public."LeadStatus" OWNER TO dileepkumar;

--
-- Name: PropertyStatus; Type: TYPE; Schema: public; Owner: dileepkumar
--

CREATE TYPE public."PropertyStatus" AS ENUM (
    'AVAILABLE',
    'SOLD',
    'RENTED'
);


ALTER TYPE public."PropertyStatus" OWNER TO dileepkumar;

--
-- Name: PropertyType; Type: TYPE; Schema: public; Owner: dileepkumar
--

CREATE TYPE public."PropertyType" AS ENUM (
    'Residential',
    'Agricultural',
    'Commercial'
);


ALTER TYPE public."PropertyType" OWNER TO dileepkumar;

--
-- Name: Role; Type: TYPE; Schema: public; Owner: dileepkumar
--

CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'DEPARTMENT',
    'PROJECT_MANAGER',
    'TEAM_MEMBER'
);


ALTER TYPE public."Role" OWNER TO dileepkumar;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Activity; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."Activity" (
    id integer NOT NULL,
    type text NOT NULL,
    note text,
    "leadId" integer NOT NULL,
    "createdById" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Activity" OWNER TO dileepkumar;

--
-- Name: Activity_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."Activity_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Activity_id_seq" OWNER TO dileepkumar;

--
-- Name: Activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."Activity_id_seq" OWNED BY public."Activity".id;


--
-- Name: Amenity; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."Amenity" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Amenity" OWNER TO dileepkumar;

--
-- Name: Amenity_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."Amenity_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Amenity_id_seq" OWNER TO dileepkumar;

--
-- Name: Amenity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."Amenity_id_seq" OWNED BY public."Amenity".id;


--
-- Name: Department; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."Department" (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Department" OWNER TO dileepkumar;

--
-- Name: Department_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."Department_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Department_id_seq" OWNER TO dileepkumar;

--
-- Name: Department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."Department_id_seq" OWNED BY public."Department".id;


--
-- Name: Lead; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."Lead" (
    id integer NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    email text,
    status public."LeadStatus" DEFAULT 'NEW'::public."LeadStatus" NOT NULL,
    source text,
    "departmentId" integer,
    "createdById" integer NOT NULL,
    "assignedToId" integer,
    notes text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Lead" OWNER TO dileepkumar;

--
-- Name: Lead_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."Lead_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Lead_id_seq" OWNER TO dileepkumar;

--
-- Name: Lead_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."Lead_id_seq" OWNED BY public."Lead".id;


--
-- Name: Property; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."Property" (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    price double precision NOT NULL,
    location text NOT NULL,
    status public."PropertyStatus" DEFAULT 'AVAILABLE'::public."PropertyStatus" NOT NULL,
    "createdById" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "propertyType" text NOT NULL
);


ALTER TABLE public."Property" OWNER TO dileepkumar;

--
-- Name: PropertyAmenity; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."PropertyAmenity" (
    id integer NOT NULL,
    "propertyId" integer NOT NULL,
    "amenityId" integer NOT NULL
);


ALTER TABLE public."PropertyAmenity" OWNER TO dileepkumar;

--
-- Name: PropertyAmenity_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."PropertyAmenity_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."PropertyAmenity_id_seq" OWNER TO dileepkumar;

--
-- Name: PropertyAmenity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."PropertyAmenity_id_seq" OWNED BY public."PropertyAmenity".id;


--
-- Name: PropertyImage; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."PropertyImage" (
    id integer NOT NULL,
    url text NOT NULL,
    "propertyId" integer NOT NULL
);


ALTER TABLE public."PropertyImage" OWNER TO dileepkumar;

--
-- Name: PropertyImage_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."PropertyImage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."PropertyImage_id_seq" OWNER TO dileepkumar;

--
-- Name: PropertyImage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."PropertyImage_id_seq" OWNED BY public."PropertyImage".id;


--
-- Name: Property_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."Property_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Property_id_seq" OWNER TO dileepkumar;

--
-- Name: Property_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."Property_id_seq" OWNED BY public."Property".id;


--
-- Name: Specification; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."Specification" (
    id integer NOT NULL,
    key text NOT NULL,
    value text NOT NULL,
    "propertyId" integer NOT NULL
);


ALTER TABLE public."Specification" OWNER TO dileepkumar;

--
-- Name: Specification_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."Specification_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Specification_id_seq" OWNER TO dileepkumar;

--
-- Name: Specification_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."Specification_id_seq" OWNED BY public."Specification".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role public."Role" NOT NULL,
    "departmentId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO dileepkumar;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO dileepkumar;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO dileepkumar;

--
-- Name: Activity id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Activity" ALTER COLUMN id SET DEFAULT nextval('public."Activity_id_seq"'::regclass);


--
-- Name: Amenity id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Amenity" ALTER COLUMN id SET DEFAULT nextval('public."Amenity_id_seq"'::regclass);


--
-- Name: Department id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Department" ALTER COLUMN id SET DEFAULT nextval('public."Department_id_seq"'::regclass);


--
-- Name: Lead id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Lead" ALTER COLUMN id SET DEFAULT nextval('public."Lead_id_seq"'::regclass);


--
-- Name: Property id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Property" ALTER COLUMN id SET DEFAULT nextval('public."Property_id_seq"'::regclass);


--
-- Name: PropertyAmenity id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyAmenity" ALTER COLUMN id SET DEFAULT nextval('public."PropertyAmenity_id_seq"'::regclass);


--
-- Name: PropertyImage id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyImage" ALTER COLUMN id SET DEFAULT nextval('public."PropertyImage_id_seq"'::regclass);


--
-- Name: Specification id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Specification" ALTER COLUMN id SET DEFAULT nextval('public."Specification_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Activity; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Activity" (id, type, note, "leadId", "createdById", "createdAt") FROM stdin;
\.


--
-- Data for Name: Amenity; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Amenity" (id, name) FROM stdin;
1	Amenity-1
2	Amenity-2
\.


--
-- Data for Name: Department; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Department" (id, name, "createdAt") FROM stdin;
\.


--
-- Data for Name: Lead; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Lead" (id, name, phone, email, status, source, "departmentId", "createdById", "assignedToId", notes, "createdAt") FROM stdin;
\.


--
-- Data for Name: Property; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Property" (id, title, description, price, location, status, "createdById", "createdAt", "propertyType") FROM stdin;
1	Premium Residential Plot in Goverdhan	Prime location near Goverdhan Parikrama Marg. Clear title with 30-year chain verification completed.	2500000	Goverdhan	AVAILABLE	1	2026-05-02 11:15:54.061	Residential
2	Agricultural Land in Variava	Fertile agricultural land with water facility. Perfect for farming or future development.	5000000	Variava	AVAILABLE	1	2026-05-02 11:30:13.755	Agricultural
3	Commercial Plot Near Mathura Highway	Strategic location on Mathura-Delhi Highway. Ideal for commercial ventures or showroom.	4500000	Mathura	AVAILABLE	1	2026-05-02 11:38:52.158	Commercial
5	test	test	10	tst	AVAILABLE	1	2026-05-02 12:28:42.575	Agricultural
\.


--
-- Data for Name: PropertyAmenity; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."PropertyAmenity" (id, "propertyId", "amenityId") FROM stdin;
1	5	1
2	5	2
\.


--
-- Data for Name: PropertyImage; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."PropertyImage" (id, url, "propertyId") FROM stdin;
\.


--
-- Data for Name: Specification; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Specification" (id, key, value, "propertyId") FROM stdin;
2	area	123	5
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."User" (id, name, email, password, role, "departmentId", "createdAt") FROM stdin;
1	Dileep Kumar	dileep@gmail.com	$2b$10$lxRefAssp0LO5allehi3y.NuEmxsOwULhbztTqdSG/o5QqH1yVZCi	ADMIN	\N	2026-05-02 10:22:05.111
2	Chhaya Pal	Chhaya@gmail.com	$2b$10$pGrQuM0uqsRj0av2w9YWY.tlmPLI4YHsG1dbqiEAh4ksvVa4sP0T2	ADMIN	\N	2026-05-02 10:30:32.431
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
29d17110-16e5-4b43-aaab-a884b43d0b24	5d9fc702ea9dd1b59b7c60fe11c8d672f321df3e9ba71f2d6503834c5a4d7bd5	2026-05-02 15:43:43.266622+05:30	20260502101343_user	\N	\N	2026-05-02 15:43:43.250125+05:30	1
4ca928a9-547f-418e-b705-88b179babe10	22c6f9843d2370f7ffee6be5953da9069681e3109e07f473d1471fcfca3599a2	2026-05-02 16:15:47.231976+05:30	20260502104547_propertytype	\N	\N	2026-05-02 16:15:47.230183+05:30	1
6835528c-df2a-45d6-9111-0bd7ad311865	f3ea835d07ef14992e60918842efa7a437ac84bf5927f2446b25d0065c4cde08	2026-05-02 17:38:37.370872+05:30	20260502120837_amenity	\N	\N	2026-05-02 17:38:37.362927+05:30	1
\.


--
-- Name: Activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Activity_id_seq"', 1, false);


--
-- Name: Amenity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Amenity_id_seq"', 2, true);


--
-- Name: Department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Department_id_seq"', 1, false);


--
-- Name: Lead_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Lead_id_seq"', 1, false);


--
-- Name: PropertyAmenity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."PropertyAmenity_id_seq"', 2, true);


--
-- Name: PropertyImage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."PropertyImage_id_seq"', 1, false);


--
-- Name: Property_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Property_id_seq"', 5, true);


--
-- Name: Specification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Specification_id_seq"', 2, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."User_id_seq"', 2, true);


--
-- Name: Activity Activity_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Activity"
    ADD CONSTRAINT "Activity_pkey" PRIMARY KEY (id);


--
-- Name: Amenity Amenity_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Amenity"
    ADD CONSTRAINT "Amenity_pkey" PRIMARY KEY (id);


--
-- Name: Department Department_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Department"
    ADD CONSTRAINT "Department_pkey" PRIMARY KEY (id);


--
-- Name: Lead Lead_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Lead"
    ADD CONSTRAINT "Lead_pkey" PRIMARY KEY (id);


--
-- Name: PropertyAmenity PropertyAmenity_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyAmenity"
    ADD CONSTRAINT "PropertyAmenity_pkey" PRIMARY KEY (id);


--
-- Name: PropertyImage PropertyImage_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyImage"
    ADD CONSTRAINT "PropertyImage_pkey" PRIMARY KEY (id);


--
-- Name: Property Property_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Property"
    ADD CONSTRAINT "Property_pkey" PRIMARY KEY (id);


--
-- Name: Specification Specification_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Specification"
    ADD CONSTRAINT "Specification_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Amenity_name_key; Type: INDEX; Schema: public; Owner: dileepkumar
--

CREATE UNIQUE INDEX "Amenity_name_key" ON public."Amenity" USING btree (name);


--
-- Name: PropertyAmenity_propertyId_amenityId_key; Type: INDEX; Schema: public; Owner: dileepkumar
--

CREATE UNIQUE INDEX "PropertyAmenity_propertyId_amenityId_key" ON public."PropertyAmenity" USING btree ("propertyId", "amenityId");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: dileepkumar
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Activity Activity_createdById_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Activity"
    ADD CONSTRAINT "Activity_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Activity Activity_leadId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Activity"
    ADD CONSTRAINT "Activity_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES public."Lead"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Lead Lead_assignedToId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Lead"
    ADD CONSTRAINT "Lead_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Lead Lead_createdById_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Lead"
    ADD CONSTRAINT "Lead_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Lead Lead_departmentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Lead"
    ADD CONSTRAINT "Lead_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES public."Department"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: PropertyAmenity PropertyAmenity_amenityId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyAmenity"
    ADD CONSTRAINT "PropertyAmenity_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES public."Amenity"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PropertyAmenity PropertyAmenity_propertyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyAmenity"
    ADD CONSTRAINT "PropertyAmenity_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES public."Property"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: PropertyImage PropertyImage_propertyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyImage"
    ADD CONSTRAINT "PropertyImage_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES public."Property"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Property Property_createdById_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Property"
    ADD CONSTRAINT "Property_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Specification Specification_propertyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Specification"
    ADD CONSTRAINT "Specification_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES public."Property"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: User User_departmentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES public."Department"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

