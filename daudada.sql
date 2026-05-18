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
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    area text,
    expected_price text NOT NULL,
    location text,
    unit text,
    property_type text
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
    price double precision,
    location text NOT NULL,
    status public."PropertyStatus" DEFAULT 'AVAILABLE'::public."PropertyStatus" NOT NULL,
    "createdById" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "propertyType" text NOT NULL,
    transaction_type text,
    address text,
    city text
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
-- Name: PropertyCategory; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."PropertyCategory" (
    id integer NOT NULL,
    name text NOT NULL,
    "propertyId" integer NOT NULL
);


ALTER TABLE public."PropertyCategory" OWNER TO dileepkumar;

--
-- Name: PropertyCategory_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."PropertyCategory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."PropertyCategory_id_seq" OWNER TO dileepkumar;

--
-- Name: PropertyCategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."PropertyCategory_id_seq" OWNED BY public."PropertyCategory".id;


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
-- Name: Testimonial; Type: TABLE; Schema: public; Owner: dileepkumar
--

CREATE TABLE public."Testimonial" (
    id integer NOT NULL,
    content text NOT NULL,
    name text NOT NULL,
    role text,
    location text,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    star integer NOT NULL,
    image text
);


ALTER TABLE public."Testimonial" OWNER TO dileepkumar;

--
-- Name: Testimonial_id_seq; Type: SEQUENCE; Schema: public; Owner: dileepkumar
--

CREATE SEQUENCE public."Testimonial_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Testimonial_id_seq" OWNER TO dileepkumar;

--
-- Name: Testimonial_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dileepkumar
--

ALTER SEQUENCE public."Testimonial_id_seq" OWNED BY public."Testimonial".id;


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
-- Name: PropertyCategory id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyCategory" ALTER COLUMN id SET DEFAULT nextval('public."PropertyCategory_id_seq"'::regclass);


--
-- Name: PropertyImage id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyImage" ALTER COLUMN id SET DEFAULT nextval('public."PropertyImage_id_seq"'::regclass);


--
-- Name: Specification id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Specification" ALTER COLUMN id SET DEFAULT nextval('public."Specification_id_seq"'::regclass);


--
-- Name: Testimonial id; Type: DEFAULT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Testimonial" ALTER COLUMN id SET DEFAULT nextval('public."Testimonial_id_seq"'::regclass);


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
1	Parking
2	Swimming Pool
3	Garden
4	Gym
5	Lift
6	Security
7	CCTV Surveillance
8	Power Backup
9	Club House
10	Children Play Area
11	WiFi
12	Air Conditioning
13	Balcony
14	Terrace
15	Modular Kitchen
16	Furnished
17	Pet Friendly
18	Fire Safety
19	Water Supply
20	Rain Water Harvesting
21	Visitor Parking
22	Intercom
23	Solar Panels
24	Community Hall
25	Jogging Track
\.


--
-- Data for Name: Department; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Department" (id, name, "createdAt") FROM stdin;
\.


--
-- Data for Name: Lead; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Lead" (id, name, phone, email, status, source, "departmentId", "createdById", "assignedToId", notes, "createdAt", area, expected_price, location, unit, property_type) FROM stdin;
1	dileep	7668366582	dileep@ttm4u.com	NEW	website	\N	1	\N	test	2026-05-18 04:00:22.84	200	5 lakhs	Govardhan	Sq. Yard	\N
2	dileep	7668366582	dileep@bjsignworld.com	NEW	website	\N	1	\N	test	2026-05-18 04:04:31.007	test	5 lakhs	Govardhan	Sq. Yard	\N
3	dileep	+911234567890	rajkumar1@gmail.com	NEW	website	\N	1	\N	test	2026-05-18 04:04:59.936	200	5 lakhs	Govardhan	Sq. Yard	\N
\.


--
-- Data for Name: Property; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Property" (id, title, description, price, location, status, "createdById", "createdAt", "propertyType", transaction_type, address, city) FROM stdin;
18	15,000 Sq. Ft. Near Gulal Kund	<p>Close to the sacred Gulal Kund, perfect for spiritual retreat or investment in the Brij region.</p>	\N	Govardhan	AVAILABLE	1	2026-05-18 08:28:26.223	Residential	\N	Near Gulal Kund, Jatipura, 	Mathura
19	20,000 Sq. Ft. Near Surbhi Kund	<p>Excellent location near the holy Surbhi Kund with good connectivity and peaceful surroundings.</p>	\N	Govardhan	AVAILABLE	1	2026-05-18 08:29:38.208	Residential	\N	Near Surbhi Kund	Mathura
20	30,000 Sq. Ft. Near Luk Luk Dau Ji	<p>Highly suitable for large investment and development near a prominent devotional landmark.</p><p></p>	\N	Govardhan	AVAILABLE	1	2026-05-18 08:30:38.983	Residential	\N	Near Luk Luk Dau Ji Temple	Mathura
21	75,000 Sq. Ft. Land on Ring Road	<p>Ring Road, near Shrinath Ji Temple</p>	\N	Poonchri	AVAILABLE	1	2026-05-18 08:32:25.419	Residential	\N	Ring Road, near Shrinath Ji Temple	Mathura
22	40,000 Sq. Ft. Commercial Plot on Ring Road	<p>Highway/Ring Road accessibility, ideal for commercial ventures, guest houses, or retail spaces.</p>	\N	Jatipura	AVAILABLE	1	2026-05-18 08:33:41.305	Commercial	\N	Ring Road	Mathura
23	2,000 Sq. Ft. Near Parikrama Marg	<p>Walking distance from the sacred Parikrama Marg, perfect for building a home or a spiritual resting place.</p>	\N	Jatipura	AVAILABLE	1	2026-05-18 08:34:48.19	Residential	\N	Near Parikrama Marg	Mathura
\.


--
-- Data for Name: PropertyAmenity; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."PropertyAmenity" (id, "propertyId", "amenityId") FROM stdin;
\.


--
-- Data for Name: PropertyCategory; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."PropertyCategory" (id, name, "propertyId") FROM stdin;
23	Plot	18
24	Land	18
25	Land	19
26	Land	20
27	Land	21
28	Land	22
29	Plot	23
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
18	Area	15,000 Sq. Ft.	18
19	Area	20,000 Sq. Ft.	19
20	Area	30,000 Sq. Ft.	20
21	Area	75,000 Sq. Ft.	21
22	Area	40,000 Sq. Ft.	22
23	Area	2,000 Sq. Ft.	23
\.


--
-- Data for Name: Testimonial; Type: TABLE DATA; Schema: public; Owner: dileepkumar
--

COPY public."Testimonial" (id, content, name, role, location, "isActive", "createdAt", star, image) FROM stdin;
4	test	dileep kumar	developer	gurgaon	t	2026-05-09 12:08:01.79	5	/uploads/1778328481763-94697068.jpeg
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
d7e4d784-7f1d-4ae0-8d94-75d0e43b47aa	182c6adb6f930d198ee621860f9f8f9362c466cb74d85bb48486c33f8ea3350a	2026-05-09 16:59:35.129233+05:30	20260509112935_add_testimonial	\N	\N	2026-05-09 16:59:35.124781+05:30	1
e7f8bc65-4a27-4e67-8789-046c6fc1818f	67bb463d5d05b15db7c9f7e9b7643899db0fd97a122832e4327361a7ddf484c7	2026-05-09 17:07:24.349201+05:30	20260509113724_add_testimonial	\N	\N	2026-05-09 17:07:24.346189+05:30	1
292c466e-66ff-4476-abe3-ab43b94c669c	ce1a8ac9dee9f108bdeb9d96335aa4d1f652c4d598ba6c3f709f1ff72371732b	2026-05-09 17:28:40.266779+05:30	20260509115840_add_testimonial	\N	\N	2026-05-09 17:28:40.265415+05:30	1
b1c392c6-4198-4fa2-968e-478c8120c272	39b490b2f29390df96bbaad4e88fd4b8b8846fedcaf88245bb43dc20fbcea143	2026-05-11 16:46:51.532096+05:30	20260511111651_add_property	\N	\N	2026-05-11 16:46:51.529298+05:30	1
0dbab32e-3d1e-4cf1-8ce5-8b50d55ffff8	bb91c447d857ae8a3422bd5161ac126ebd1f40e2c1585c840424e880dfb81d6f	2026-05-11 17:52:07.23786+05:30	20260511122207_add_property	\N	\N	2026-05-11 17:52:07.236402+05:30	1
f1d4f8d5-7122-4edb-9854-94beb8ffa99c	521f6e2b86d2258f7ada743755f9a899ea6232fe64a76a15e9067611e7c86e91	2026-05-12 12:41:30.429887+05:30	20260512071130_add_property	\N	\N	2026-05-12 12:41:30.425066+05:30	1
f2c6e624-2a27-4099-80ec-367b89f4fe96	fcc85113d9b6b3004300fdd8a4c7e114b12ff796293f0da23131c523a064f4f6	2026-05-12 16:02:28.828459+05:30	20260512103228_add_property	\N	\N	2026-05-12 16:02:28.82688+05:30	1
1e8b7c81-bad1-43c4-a992-5d11b22c17e4	65c61e57ec4ed7b4235ce92524fbdcc42a8e851b04c1700559aecc8620386002	2026-05-12 16:09:55.824117+05:30	20260512103955_add_property	\N	\N	2026-05-12 16:09:55.821537+05:30	1
ef563767-35fa-4906-a0e0-acf7933ba6a5	f981ac89622c6205b0c395077afedee4bca3cd1592344a6cc6505d70c9a46a6f	2026-05-18 09:15:28.804903+05:30	20260518034528_lead	\N	\N	2026-05-18 09:15:28.803639+05:30	1
5ae96113-c63e-4d92-8874-bf5bf2bf2961	81bef885e9ee1a62a8030bc9467b308f5953b276df41d0ebf87c9fc8701191ab	2026-05-18 13:56:19.390253+05:30	20260518082619_propertytype	\N	\N	2026-05-18 13:56:19.387307+05:30	1
\.


--
-- Name: Activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Activity_id_seq"', 1, false);


--
-- Name: Amenity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Amenity_id_seq"', 27, true);


--
-- Name: Department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Department_id_seq"', 1, false);


--
-- Name: Lead_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Lead_id_seq"', 3, true);


--
-- Name: PropertyAmenity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."PropertyAmenity_id_seq"', 21, true);


--
-- Name: PropertyCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."PropertyCategory_id_seq"', 29, true);


--
-- Name: PropertyImage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."PropertyImage_id_seq"', 6, true);


--
-- Name: Property_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Property_id_seq"', 23, true);


--
-- Name: Specification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Specification_id_seq"', 23, true);


--
-- Name: Testimonial_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dileepkumar
--

SELECT pg_catalog.setval('public."Testimonial_id_seq"', 4, true);


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
-- Name: PropertyCategory PropertyCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyCategory"
    ADD CONSTRAINT "PropertyCategory_pkey" PRIMARY KEY (id);


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
-- Name: Testimonial Testimonial_pkey; Type: CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."Testimonial"
    ADD CONSTRAINT "Testimonial_pkey" PRIMARY KEY (id);


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
-- Name: PropertyCategory PropertyCategory_propertyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyCategory"
    ADD CONSTRAINT "PropertyCategory_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES public."Property"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: PropertyImage PropertyImage_propertyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dileepkumar
--

ALTER TABLE ONLY public."PropertyImage"
    ADD CONSTRAINT "PropertyImage_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES public."Property"(id) ON UPDATE CASCADE ON DELETE CASCADE;


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

