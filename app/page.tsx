"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowRight, BookOpen, CalendarDays, Check, ChevronDown,
  Copy, HandHeart, Heart, MapPin, Menu, MessageCircle, Phone,
  Shirt, ShoppingBasket, Sparkles, Wallet, X,
} from "lucide-react";
import heroImage from "@/public/images/hero.png";
import schoolImage from "@/public/images/school.png";

const categories = [
  { name: "Fournitures scolaires", short: "Apprendre", description: "Cahiers, stylos, cartables, livres et autres outils pour grandir.", placeholder: "Ex. : cahiers, stylos, cartables, craies, livres…", icon: BookOpen, color: "sage" },
  { name: "Vivres", short: "Nourrir", description: "Riz, sucre, lait, huile, farine et denrées de votre choix.", placeholder: "Ex. : riz, sucre, lait, huile, farine…", icon: ShoppingBasket, color: "amber" },
  { name: "Non-vivres", short: "Prendre soin", description: "Vêtements, chaussures, draps, couvertures et essentiels du quotidien.", placeholder: "Ex. : habits, chaussures, draps, couvertures…", icon: Shirt, color: "rose" },
  { name: "Sommes d'argent", short: "Soutenir", description: "Une contribution financière libre, selon vos possibilités.", placeholder: "Précisez simplement que vous souhaitez contribuer en argent.", icon: Wallet, color: "blue" },
] as const;

const contacts = [
  { display: "+243 992 096 294", tel: "+243992096294", wa: "243992096294" },
  { display: "+243 994 974 019", tel: "+243994974019", wa: "243994974019" },
  { display: "+243 903 133 376", tel: "+243903133376", wa: "243903133376" },
];

function Brand({ light = false }: { light?: boolean }) {
  return <a href="#accueil" className={`brand ${light ? "brand-light" : ""}`} aria-label="GURP, retour à l'accueil">
    <span className="brand-mark"><HandHeart size={23} strokeWidth={1.8} /></span>
    <span className="brand-text"><strong>GURP</strong><small>Unité · Respect · Partage</small></span>
  </a>;
}

export default function Home() {
  const [selected, setSelected] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState("");
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const message = `Bonjour, je confirme ma participation à l'apostolat du GURP à l'orphelinat de Bagira, le dimanche 6 décembre 2026.\n\nMon don : ${selected || "à préciser"}\nDétail : ${detail.trim() || "à préciser"}${name.trim() ? `\nMon nom : ${name.trim()}` : ""}${phone.trim() ? `\nMon téléphone : ${phone.trim()}` : ""}\n\nMerci de me dire où et quand remettre mon don.`;

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.prompt("Copiez votre message :", message);
    }
  }

  return <>
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Navigation principale">
          <a href="#mission" onClick={() => setMenuOpen(false)}>Notre mission</a>
          <a href="#contribuer" onClick={() => setMenuOpen(false)}>Comment contribuer</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contribuer" onClick={() => setMenuOpen(false)}>Je participe <ArrowRight size={16} /></a>
        </nav>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section className="hero" id="accueil" aria-labelledby="hero-title">
        <Image src={heroImage} alt="Illustration de bénévoles et d'enfants partageant des fournitures scolaires dans une cour ensoleillée" fill priority sizes="100vw" className="hero-photo" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> APOSTOLAT GURP · BAGIRA</span>
          <h1 id="hero-title">Un geste de cœur.<br /><em>Une journée d&apos;espoir.</em></h1>
          <p><strong className="event-date-inline">Dimanche 6 décembre 2026,</strong> retrouvons les enfants de l&apos;orphelinat de Bagira. Ensemble, partageons bien plus que des dons : de la présence, de la joie et de l&apos;espérance.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#contribuer">Je souhaite contribuer <ArrowRight size={18} /></a>
            <a className="hero-link" href="#mission">Découvrir la mission <ArrowDownRight size={19} /></a>
          </div>
          <div className="hero-meta"><span><MapPin size={18} /> Orphelinat de Bagira, RDC</span><i /><span><Heart size={18} /> Chacun donne selon ses moyens</span></div>
        </div>
        <span className="image-credit">Image d&apos;illustration générée par IA</span>
        <a className="scroll-cue" href="#mission" aria-label="Faire défiler vers la mission"><ChevronDown size={22} /></a>
      </section>

      <section className="intro-band" id="mission">
        <div className="container intro-grid">
          <div data-reveal><span className="eyebrow"><span className="eyebrow-line" /> NOTRE RENDEZ-VOUS</span><h2>La générosité prend vie <em>quand on la partage.</em></h2></div>
          <div className="intro-copy" data-reveal><p>Les jeunes du <strong>Groupe pour l&apos;Unité, le Respect et le Partage (GURP)</strong> organisent un apostolat à l&apos;orphelinat de Bagira. Nous irons à la rencontre des enfants pour leur offrir un moment de joie, de réconfort et d&apos;espérance.</p><p>Un cahier pour apprendre, de quoi nourrir, un vêtement pour se couvrir ou un soutien en argent : chaque geste compte.</p><div className="no-minimum"><Heart size={19} /> Aucun montant ni aucune quantité n&apos;est imposé.</div></div>
        </div>
      </section>

      <section className="story-section">
        <div className="container story-grid">
          <div className="story-image" data-reveal><Image src={schoolImage} alt="Illustration d'un partage de cahiers et de crayons" fill sizes="(max-width: 800px) 100vw, 50vw" /><div className="story-image-label"><Sparkles size={17} /> Chaque geste ouvre une possibilité</div><span className="story-credit">Image d&apos;illustration générée par IA</span></div>
          <div className="story-content" data-reveal><span className="eyebrow"><span className="eyebrow-line" /> UNE JOURNÉE ENSEMBLE</span><h2>Offrir aujourd&apos;hui.<br /><em>Inspirer demain.</em></h2><p>Votre contribution accompagnera notre visite à l&apos;orphelinat. Nous voulons que cette journée soit faite de rencontres, d&apos;attention et de choses utiles pour le quotidien des enfants.</p><div className="story-point"><span><HandHeart size={22} /></span><div><strong>Un don à votre mesure</strong><small>Choisissez librement ce que vous pouvez apporter.</small></div></div><div className="story-point"><span><MessageCircle size={21} /></span><div><strong>Une remise organisée ensemble</strong><small>Contactez un membre du GURP pour convenir des détails.</small></div></div><a className="text-link" href="#contribuer">Choisir mon geste <ArrowRight size={18} /></a></div>
        </div>
      </section>

      <section className="contribute-section" id="contribuer">
        <div className="container">
          <div className="section-heading" data-reveal><span className="eyebrow"><span className="eyebrow-line" /> PARTICIPER À L&apos;APOSTOLAT</span><h2>Votre geste, <em>à votre façon.</em></h2><p>Choisissez ce que vous souhaitez apporter, puis préparez votre message. Il ne reste qu&apos;à l&apos;envoyer à un membre organisateur.</p></div>
          <div className="form-grid">
            <div className="selection-panel" data-reveal>
              <div className="step-heading"><span>01</span><div><h3>Que souhaitez-vous apporter ?</h3><p>Sélectionnez une catégorie. Vous pourrez préciser votre don ensuite.</p></div></div>
              <div className="category-grid" role="radiogroup" aria-label="Catégorie de don">
                {categories.map((category) => { const Icon = category.icon; const active = selected === category.name; return <button key={category.name} type="button" className={`category-card ${category.color} ${active ? "selected" : ""}`} role="radio" aria-checked={active} onClick={() => setSelected(category.name)}><span className="category-icon"><Icon size={26} strokeWidth={1.7} /></span><span className="category-text"><small>{category.short}</small><strong>{category.name}</strong><span>{category.description}</span></span><span className="category-check"><Check size={16} /></span></button>; })}
              </div>
            </div>
            <div className="details-panel" data-reveal>
              <div className="step-heading"><span>02</span><div><h3>Parlez-nous de votre don</h3><p>Ces informations permettront de préparer votre confirmation.</p></div></div>
              <div className="fields"><label htmlFor="don-detail">Ce que vous apportez <span>· facultatif</span></label><textarea id="don-detail" value={detail} onChange={(event) => setDetail(event.target.value)} placeholder={categories.find((category) => category.name === selected)?.placeholder || "Ex. : 10 cahiers et quelques stylos…"} rows={4} maxLength={600} /><div className="field-row"><div><label htmlFor="don-name">Votre nom <span>· facultatif</span></label><input id="don-name" type="text" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Ex. : Marie K." maxLength={100} /></div><div><label htmlFor="don-phone">Votre téléphone <span>· facultatif</span></label><input id="don-phone" type="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Ex. : +243 990 000 000" maxLength={40} /></div></div></div>
              <div className="summary"><div className="summary-title"><span>Votre récapitulatif</span><Sparkles size={16} /></div><p><strong>Mon don :</strong> {selected || "Choisissez une catégorie ci-contre"}</p><p><strong>Détail :</strong> {detail.trim() || "À préciser"}</p>{name.trim() && <p><strong>Nom :</strong> {name.trim()}</p>}{phone.trim() && <p><strong>Téléphone :</strong> {phone.trim()}</p>}</div>
              <button type="button" className="copy-button" onClick={copyMessage}>{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? "Message copié !" : "Copier mon message"}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-intro" data-reveal><span className="eyebrow"><span className="eyebrow-line" /> DERNIÈRE ÉTAPE</span><h2>Parlons de <em>votre participation.</em></h2><p>Choisissez un membre organisateur du GURP. Le bouton WhatsApp ouvre un message déjà rédigé avec votre récapitulatif. Vous pouvez aussi appeler directement.</p><div className="contact-note"><Heart size={19} /> Nous conviendrons ensemble du lieu et du moment de la remise.</div></div>
          <div className="contact-list" data-reveal>{contacts.map((contact, index) => <div className="contact-card" key={contact.wa}><div className="contact-avatar"><Phone size={21} /></div><div className="contact-info"><small>MEMBRE ORGANISATEUR {String(index + 1).padStart(2, "0")}</small><strong>{contact.display}</strong></div><div className="contact-actions"><a href={`https://wa.me/${contact.wa}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label={`Envoyer un WhatsApp au ${contact.display}`} className="whatsapp-action"><MessageCircle size={19} /><span>WhatsApp</span></a><a href={`tel:${contact.tel}`} aria-label={`Appeler le ${contact.display}`} className="call-action"><Phone size={18} /><span>Appeler</span></a></div></div>)}</div>
        </div>
      </section>

      <section className="closing"><div className="container closing-inner" data-reveal><span className="closing-icon"><HandHeart size={31} /></span><p>« Chacun donne selon ses moyens<br />et selon son cœur. »</p><span>Merci pour votre générosité.</span></div></section>
    </main>
    <footer className="footer"><div className="container footer-main"><div><Brand light /><p>Ensemble, faisons de cette journée un souvenir de partage et d&apos;espérance.</p></div><div className="footer-details"><span><CalendarDays size={17} /> Dimanche 6 décembre 2026</span><span><MapPin size={17} /> Orphelinat de Bagira</span><a href="#contribuer">Je participe <ArrowRight size={17} /></a></div></div><div className="container footer-bottom"><span>© 2026 GURP · Groupe pour l&apos;Unité, le Respect et le Partage</span><span>Fait avec cœur pour Bagira</span></div></footer>
  </>;
}
