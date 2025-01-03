PGDMP                     
    |         	   jobportal    15.4    15.4 i    }           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ~           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    33681 	   jobportal    DATABASE     �   CREATE DATABASE jobportal WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE jobportal;
                postgres    false            �            1259    42744    applicant_profiles    TABLE     A  CREATE TABLE public.applicant_profiles (
    id integer NOT NULL,
    user_id integer NOT NULL,
    fullname character varying(255),
    avatar character varying(255),
    date_of_birth timestamp with time zone,
    address character varying(255),
    phone character varying(15),
    cv character varying(255),
    district_id integer,
    city_id integer,
    country_id integer,
    description text,
    experience text,
    education text,
    skills jsonb,
    social_media_links jsonb,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 &   DROP TABLE public.applicant_profiles;
       public         heap    postgres    false            �            1259    42743    applicant_profiles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.applicant_profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.applicant_profiles_id_seq;
       public          postgres    false    223            �           0    0    applicant_profiles_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.applicant_profiles_id_seq OWNED BY public.applicant_profiles.id;
          public          postgres    false    222            �            1259    42859 
   applicants    TABLE     �   CREATE TABLE public.applicants (
    id integer NOT NULL,
    applicant_profile_id integer NOT NULL,
    job_id integer NOT NULL,
    apply_date timestamp with time zone,
    status character varying(255) DEFAULT 'Pending'::character varying
);
    DROP TABLE public.applicants;
       public         heap    postgres    false            �            1259    42858    applicants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.applicants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.applicants_id_seq;
       public          postgres    false    233            �           0    0    applicants_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.applicants_id_seq OWNED BY public.applicants.id;
          public          postgres    false    232            �            1259    42720    cities    TABLE     �   CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "countryId" integer NOT NULL
);
    DROP TABLE public.cities;
       public         heap    postgres    false            �            1259    42719    cities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.cities_id_seq;
       public          postgres    false    219            �           0    0    cities_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;
          public          postgres    false    218            �            1259    42711 	   countries    TABLE     e   CREATE TABLE public.countries (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.countries;
       public         heap    postgres    false            �            1259    42710    countries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.countries_id_seq;
       public          postgres    false    217            �           0    0    countries_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;
          public          postgres    false    216            �            1259    42732 	   districts    TABLE     �   CREATE TABLE public.districts (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "cityId" integer NOT NULL
);
    DROP TABLE public.districts;
       public         heap    postgres    false            �            1259    42731    districts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.districts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.districts_id_seq;
       public          postgres    false    221            �           0    0    districts_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.districts_id_seq OWNED BY public.districts.id;
          public          postgres    false    220            �            1259    42773    employer_profiles    TABLE     �  CREATE TABLE public.employer_profiles (
    id integer NOT NULL,
    user_id integer NOT NULL,
    company_name character varying(255),
    website character varying(255),
    address character varying(255),
    district_id integer,
    city_id integer,
    country_id integer,
    description text,
    social_media_links jsonb,
    logo character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
 %   DROP TABLE public.employer_profiles;
       public         heap    postgres    false            �            1259    42772    employer_profiles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.employer_profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.employer_profiles_id_seq;
       public          postgres    false    225            �           0    0    employer_profiles_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.employer_profiles_id_seq OWNED BY public.employer_profiles.id;
          public          postgres    false    224            �            1259    42802 
   industries    TABLE     f   CREATE TABLE public.industries (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.industries;
       public         heap    postgres    false            �            1259    42801    industries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.industries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.industries_id_seq;
       public          postgres    false    227            �           0    0    industries_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.industries_id_seq OWNED BY public.industries.id;
          public          postgres    false    226            �            1259    42811 	   job_types    TABLE     e   CREATE TABLE public.job_types (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.job_types;
       public         heap    postgres    false            �            1259    42810    job_types_id_seq    SEQUENCE     �   CREATE SEQUENCE public.job_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.job_types_id_seq;
       public          postgres    false    229            �           0    0    job_types_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.job_types_id_seq OWNED BY public.job_types.id;
          public          postgres    false    228            �            1259    42820    jobs    TABLE       CREATE TABLE public.jobs (
    id integer NOT NULL,
    employer_id integer NOT NULL,
    industry_id integer,
    title character varying(255) NOT NULL,
    description text,
    responsibilities text,
    requirements text,
    qualifications text,
    salary_range character varying(255),
    benefits jsonb,
    job_type_id integer,
    experience_level character varying(255),
    district_id integer,
    city_id integer,
    country_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.jobs;
       public         heap    postgres    false            �            1259    42819    jobs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.jobs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.jobs_id_seq;
       public          postgres    false    231            �           0    0    jobs_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.jobs_id_seq OWNED BY public.jobs.id;
          public          postgres    false    230            �            1259    42699    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    "isLocked" boolean DEFAULT false
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    42698    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            �            1259    42878 	   wishlists    TABLE     �   CREATE TABLE public.wishlists (
    id integer NOT NULL,
    applicant_profile_id integer NOT NULL,
    job_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.wishlists;
       public         heap    postgres    false            �            1259    42877    wishlists_id_seq    SEQUENCE     �   CREATE SEQUENCE public.wishlists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.wishlists_id_seq;
       public          postgres    false    235            �           0    0    wishlists_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.wishlists_id_seq OWNED BY public.wishlists.id;
          public          postgres    false    234            �           2604    42747    applicant_profiles id    DEFAULT     ~   ALTER TABLE ONLY public.applicant_profiles ALTER COLUMN id SET DEFAULT nextval('public.applicant_profiles_id_seq'::regclass);
 D   ALTER TABLE public.applicant_profiles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    42862    applicants id    DEFAULT     n   ALTER TABLE ONLY public.applicants ALTER COLUMN id SET DEFAULT nextval('public.applicants_id_seq'::regclass);
 <   ALTER TABLE public.applicants ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    42723 	   cities id    DEFAULT     f   ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);
 8   ALTER TABLE public.cities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    42714    countries id    DEFAULT     l   ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);
 ;   ALTER TABLE public.countries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    42735    districts id    DEFAULT     l   ALTER TABLE ONLY public.districts ALTER COLUMN id SET DEFAULT nextval('public.districts_id_seq'::regclass);
 ;   ALTER TABLE public.districts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    42776    employer_profiles id    DEFAULT     |   ALTER TABLE ONLY public.employer_profiles ALTER COLUMN id SET DEFAULT nextval('public.employer_profiles_id_seq'::regclass);
 C   ALTER TABLE public.employer_profiles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    42805    industries id    DEFAULT     n   ALTER TABLE ONLY public.industries ALTER COLUMN id SET DEFAULT nextval('public.industries_id_seq'::regclass);
 <   ALTER TABLE public.industries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    42814    job_types id    DEFAULT     l   ALTER TABLE ONLY public.job_types ALTER COLUMN id SET DEFAULT nextval('public.job_types_id_seq'::regclass);
 ;   ALTER TABLE public.job_types ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    42823    jobs id    DEFAULT     b   ALTER TABLE ONLY public.jobs ALTER COLUMN id SET DEFAULT nextval('public.jobs_id_seq'::regclass);
 6   ALTER TABLE public.jobs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    42702    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    42881    wishlists id    DEFAULT     l   ALTER TABLE ONLY public.wishlists ALTER COLUMN id SET DEFAULT nextval('public.wishlists_id_seq'::regclass);
 ;   ALTER TABLE public.wishlists ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    235    235            n          0    42744    applicant_profiles 
   TABLE DATA           �   COPY public.applicant_profiles (id, user_id, fullname, avatar, date_of_birth, address, phone, cv, district_id, city_id, country_id, description, experience, education, skills, social_media_links, created_at, updated_at) FROM stdin;
    public          postgres    false    223   �       x          0    42859 
   applicants 
   TABLE DATA           Z   COPY public.applicants (id, applicant_profile_id, job_id, apply_date, status) FROM stdin;
    public          postgres    false    233   6�       j          0    42720    cities 
   TABLE DATA           7   COPY public.cities (id, name, "countryId") FROM stdin;
    public          postgres    false    219   z�       h          0    42711 	   countries 
   TABLE DATA           -   COPY public.countries (id, name) FROM stdin;
    public          postgres    false    217   ��       l          0    42732 	   districts 
   TABLE DATA           7   COPY public.districts (id, name, "cityId") FROM stdin;
    public          postgres    false    221   ΃       p          0    42773    employer_profiles 
   TABLE DATA           �   COPY public.employer_profiles (id, user_id, company_name, website, address, district_id, city_id, country_id, description, social_media_links, logo, created_at, updated_at) FROM stdin;
    public          postgres    false    225   �       r          0    42802 
   industries 
   TABLE DATA           .   COPY public.industries (id, name) FROM stdin;
    public          postgres    false    227   �       t          0    42811 	   job_types 
   TABLE DATA           -   COPY public.job_types (id, name) FROM stdin;
    public          postgres    false    229   E�       v          0    42820    jobs 
   TABLE DATA           �   COPY public.jobs (id, employer_id, industry_id, title, description, responsibilities, requirements, qualifications, salary_range, benefits, job_type_id, experience_level, district_id, city_id, country_id, created_at, updated_at) FROM stdin;
    public          postgres    false    231   ��       f          0    42699    users 
   TABLE DATA           F   COPY public.users (id, email, password, role, "isLocked") FROM stdin;
    public          postgres    false    215   ��       z          0    42878 	   wishlists 
   TABLE DATA           Q   COPY public.wishlists (id, applicant_profile_id, job_id, created_at) FROM stdin;
    public          postgres    false    235   ��       �           0    0    applicant_profiles_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.applicant_profiles_id_seq', 3, true);
          public          postgres    false    222            �           0    0    applicants_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.applicants_id_seq', 1, true);
          public          postgres    false    232            �           0    0    cities_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cities_id_seq', 1, true);
          public          postgres    false    218            �           0    0    countries_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.countries_id_seq', 1, true);
          public          postgres    false    216            �           0    0    districts_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.districts_id_seq', 4, true);
          public          postgres    false    220            �           0    0    employer_profiles_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.employer_profiles_id_seq', 3, true);
          public          postgres    false    224            �           0    0    industries_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.industries_id_seq', 5, true);
          public          postgres    false    226            �           0    0    job_types_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.job_types_id_seq', 4, true);
          public          postgres    false    228            �           0    0    jobs_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.jobs_id_seq', 1, true);
          public          postgres    false    230            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 7, true);
          public          postgres    false    214            �           0    0    wishlists_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.wishlists_id_seq', 1, false);
          public          postgres    false    234            �           2606    42751 *   applicant_profiles applicant_profiles_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.applicant_profiles
    ADD CONSTRAINT applicant_profiles_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.applicant_profiles DROP CONSTRAINT applicant_profiles_pkey;
       public            postgres    false    223            �           2606    42865    applicants applicants_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.applicants
    ADD CONSTRAINT applicants_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.applicants DROP CONSTRAINT applicants_pkey;
       public            postgres    false    233            �           2606    42725    cities cities_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.cities DROP CONSTRAINT cities_pkey;
       public            postgres    false    219            �           2606    42718    countries countries_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_name_key UNIQUE (name);
 F   ALTER TABLE ONLY public.countries DROP CONSTRAINT countries_name_key;
       public            postgres    false    217            �           2606    42716    countries countries_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.countries DROP CONSTRAINT countries_pkey;
       public            postgres    false    217            �           2606    42737    districts districts_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.districts
    ADD CONSTRAINT districts_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.districts DROP CONSTRAINT districts_pkey;
       public            postgres    false    221            �           2606    42780 (   employer_profiles employer_profiles_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.employer_profiles
    ADD CONSTRAINT employer_profiles_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.employer_profiles DROP CONSTRAINT employer_profiles_pkey;
       public            postgres    false    225            �           2606    42809    industries industries_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.industries
    ADD CONSTRAINT industries_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.industries DROP CONSTRAINT industries_name_key;
       public            postgres    false    227            �           2606    42807    industries industries_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.industries
    ADD CONSTRAINT industries_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.industries DROP CONSTRAINT industries_pkey;
       public            postgres    false    227            �           2606    42818    job_types job_types_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.job_types
    ADD CONSTRAINT job_types_name_key UNIQUE (name);
 F   ALTER TABLE ONLY public.job_types DROP CONSTRAINT job_types_name_key;
       public            postgres    false    229            �           2606    42816    job_types job_types_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.job_types
    ADD CONSTRAINT job_types_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.job_types DROP CONSTRAINT job_types_pkey;
       public            postgres    false    229            �           2606    42827    jobs jobs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_pkey;
       public            postgres    false    231            �           2606    42709    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    215            �           2606    42707    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �           2606    42884    wishlists wishlists_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.wishlists
    ADD CONSTRAINT wishlists_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.wishlists DROP CONSTRAINT wishlists_pkey;
       public            postgres    false    235            �           2606    42762 2   applicant_profiles applicant_profiles_city_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.applicant_profiles
    ADD CONSTRAINT applicant_profiles_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(id);
 \   ALTER TABLE ONLY public.applicant_profiles DROP CONSTRAINT applicant_profiles_city_id_fkey;
       public          postgres    false    219    223    3246            �           2606    42767 5   applicant_profiles applicant_profiles_country_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.applicant_profiles
    ADD CONSTRAINT applicant_profiles_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id);
 _   ALTER TABLE ONLY public.applicant_profiles DROP CONSTRAINT applicant_profiles_country_id_fkey;
       public          postgres    false    217    223    3244            �           2606    42757 6   applicant_profiles applicant_profiles_district_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.applicant_profiles
    ADD CONSTRAINT applicant_profiles_district_id_fkey FOREIGN KEY (district_id) REFERENCES public.districts(id);
 `   ALTER TABLE ONLY public.applicant_profiles DROP CONSTRAINT applicant_profiles_district_id_fkey;
       public          postgres    false    3248    221    223            �           2606    42752 2   applicant_profiles applicant_profiles_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.applicant_profiles
    ADD CONSTRAINT applicant_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.applicant_profiles DROP CONSTRAINT applicant_profiles_user_id_fkey;
       public          postgres    false    215    3240    223            �           2606    42866 /   applicants applicants_applicant_profile_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.applicants
    ADD CONSTRAINT applicants_applicant_profile_id_fkey FOREIGN KEY (applicant_profile_id) REFERENCES public.applicant_profiles(id) ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.applicants DROP CONSTRAINT applicants_applicant_profile_id_fkey;
       public          postgres    false    3250    233    223            �           2606    42871 !   applicants applicants_job_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.applicants
    ADD CONSTRAINT applicants_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.jobs(id) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.applicants DROP CONSTRAINT applicants_job_id_fkey;
       public          postgres    false    233    3262    231            �           2606    42726    cities cities_countryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cities
    ADD CONSTRAINT "cities_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES public.countries(id);
 H   ALTER TABLE ONLY public.cities DROP CONSTRAINT "cities_countryId_fkey";
       public          postgres    false    219    3244    217            �           2606    42738    districts districts_cityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.districts
    ADD CONSTRAINT "districts_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES public.cities(id);
 K   ALTER TABLE ONLY public.districts DROP CONSTRAINT "districts_cityId_fkey";
       public          postgres    false    221    219    3246            �           2606    42791 0   employer_profiles employer_profiles_city_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employer_profiles
    ADD CONSTRAINT employer_profiles_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(id);
 Z   ALTER TABLE ONLY public.employer_profiles DROP CONSTRAINT employer_profiles_city_id_fkey;
       public          postgres    false    219    225    3246            �           2606    42796 3   employer_profiles employer_profiles_country_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employer_profiles
    ADD CONSTRAINT employer_profiles_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id);
 ]   ALTER TABLE ONLY public.employer_profiles DROP CONSTRAINT employer_profiles_country_id_fkey;
       public          postgres    false    217    225    3244            �           2606    42786 4   employer_profiles employer_profiles_district_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employer_profiles
    ADD CONSTRAINT employer_profiles_district_id_fkey FOREIGN KEY (district_id) REFERENCES public.districts(id);
 ^   ALTER TABLE ONLY public.employer_profiles DROP CONSTRAINT employer_profiles_district_id_fkey;
       public          postgres    false    225    221    3248            �           2606    42781 0   employer_profiles employer_profiles_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employer_profiles
    ADD CONSTRAINT employer_profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public.employer_profiles DROP CONSTRAINT employer_profiles_user_id_fkey;
       public          postgres    false    215    3240    225            �           2606    42848    jobs jobs_city_id_fkey    FK CONSTRAINT     v   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(id);
 @   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_city_id_fkey;
       public          postgres    false    3246    231    219            �           2606    42853    jobs jobs_country_id_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(id);
 C   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_country_id_fkey;
       public          postgres    false    231    217    3244            �           2606    42843    jobs jobs_district_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_district_id_fkey FOREIGN KEY (district_id) REFERENCES public.districts(id);
 D   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_district_id_fkey;
       public          postgres    false    221    231    3248            �           2606    42828    jobs jobs_employer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_employer_id_fkey FOREIGN KEY (employer_id) REFERENCES public.employer_profiles(id) ON DELETE CASCADE;
 D   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_employer_id_fkey;
       public          postgres    false    225    231    3252            �           2606    42833    jobs jobs_industry_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_industry_id_fkey FOREIGN KEY (industry_id) REFERENCES public.industries(id) ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_industry_id_fkey;
       public          postgres    false    3256    231    227            �           2606    42838    jobs jobs_job_type_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_job_type_id_fkey FOREIGN KEY (job_type_id) REFERENCES public.job_types(id);
 D   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_job_type_id_fkey;
       public          postgres    false    229    3260    231            �           2606    42885 -   wishlists wishlists_applicant_profile_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.wishlists
    ADD CONSTRAINT wishlists_applicant_profile_id_fkey FOREIGN KEY (applicant_profile_id) REFERENCES public.applicant_profiles(id) ON DELETE CASCADE;
 W   ALTER TABLE ONLY public.wishlists DROP CONSTRAINT wishlists_applicant_profile_id_fkey;
       public          postgres    false    235    223    3250            �           2606    42890    wishlists wishlists_job_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.wishlists
    ADD CONSTRAINT wishlists_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.jobs(id) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.wishlists DROP CONSTRAINT wishlists_job_id_fkey;
       public          postgres    false    231    235    3262            n     x��P�N�0<;_��$��8��
*A�-�,MJkGI�@�'UEH�J;ڙ���ID�60�HV��\�,��*��>g)�"��(�c��Y>���W�]��ŮAS"���~֠M[a��ɥ.k���;�TWv���(''YRg�@�|��nܡ.zO����U@�ah{������p3������<a՘c�a7i�-'������90�b�"0!�!~�<Aw�?��!��*�A��㌟���<V\*���N2N(ox��p^��      x   4   x�3�4B##]CC]CKs++CK=CCms΀Լ�̼t�=... �Y	<      j      x�3���Wp��T�����4����� :h�      h      x�3��L-�K������ "r�      l   7   x�3�t�,.)�L.Q0�4�2��(Up)MVH�,�
#䍁\�ȍ���� |x�      p   �   x�}���0���7]�B���j\td!X����i����������w8�,�vo�����Pıs��k/���	)����	�� ��2����6#�pW��N֪��|e`�WtU/����yQt
Q�� ��g)P�e]��ܤ��f��E�
3�[|��HD"����d[dY����*��XQɢ(� )�Y�      r   T   x�3���K�/�M,���SIM�����O��2��M,�N-��K�2��I,�2�t,J��,IM.)-J�2��-�)��MM�L����� ��}      t   4   x�3�t+��Q(��M�2�H,*���9�Rs�KR�L8���J��K�b���� p�1      v   	  x�}P�N�@=�W4\<����5�Q���Ѕ�a�tY�����L��k��^ZF����L����Dm苌� m#j��B-�4�0hg}�����B���:�a�@�(��F[b�n��&����҇O�P�����|虚ǻ<�F5�%>�Б	��ڍ���Q����v�L�GgEQd���D��-�9m��(�$����^�/�?��ap3��]NS�7!��U��eV^B���j�|Uק��?��-����<p�      f   M  x�e��r�0 ��5<��(P��*�V�(��L7	�	$"����Lg�:����9���-?�QRQ(w�^���Y�5��ĺrTOҶ�t��t�m��E���P6��N,?����B
�ōT�r na���f64���戠0��r2Y���2���DI,�_����� )9MQY����.��E�`;���{��RL{��hC>�۩���>xS�D셡��=�5�rg"��oO��@ޫ���\�t�/�8J�~@��k�Y>JM�us~�C�豋��Waf�H��6j��ݿ6�ʉ&o�#����������>�_@U�o����      z      x������ � �     