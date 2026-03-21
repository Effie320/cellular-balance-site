/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Activity, 
  Brain, 
  Zap, 
  ShieldCheck, 
  Users, 
  Clock, 
  CheckCircle2, 
  Mail, 
  Phone, 
  User,
  MessageSquare,
  Globe,
  ArrowRight,
  Heart,
  Sparkles
} from 'lucide-react';

type Language = 'el' | 'en' | 'de';

interface Content {
  langSelect: {
    title: string;
    subtitle: string;
  };
  hero: {
    title: string;
    subtitle: string;
    text: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  symptoms: {
    title: string;
    cards: { title: string; text: string }[];
  };
  empathy: {
    title: string;
    text: string;
  };
  inflammation: {
    title: string;
    text: string;
    points: string[];
  };
  cellular: {
    title: string;
    text: string;
  };
  simpleTests: {
    title: string;
    text: string;
  };
  analysis: {
    title: string;
    text: string;
    features: string[];
  };
  process: {
    title: string;
    steps: { title: string; text: string }[];
  };
  kids: {
    title: string;
    text: string;
  };
  invitation: {
    title: string;
    text: string;
  };
  form: {
    title: string;
    text: string;
    personalMessage: string;
    personalName: string;
    personalTitle: string;
    name: string;
    phone: string;
    email: string;
    timing: string;
    message: string;
    cta: string;
    privacy: string;
  };
}

const translations: Record<Language, Content> = {
  el: {
    langSelect: {
      title: "Διάλεξε τη γλώσσα σου",
      subtitle: "Επίλεξε για να συνεχίσεις"
    },
    hero: {
      title: "Κάτι νιώθεις… και ίσως δεν είναι τυχαίο.",
      subtitle: "Το σώμα σου σου μιλάει. Το ακούς;",
      text: "Κούραση χωρίς λόγο, πονοκέφαλοι, δυσκολία συγκέντρωσης, άγχος, χαμηλή ενέργεια… Πολλοί άνθρωποι τα θεωρούν φυσιολογικά. Όμως πολύ συχνά είναι σημάδια ότι κάτι στο σώμα δεν λειτουργεί όπως θα έπρεπε.",
      ctaPrimary: "Μάθε περισσότερα",
      ctaSecondary: "Δωρεάν πρώτη ενημέρωση"
    },
    symptoms: {
      title: "Μήπως αναγνωρίζεις κάτι από αυτά;",
      cards: [
        { title: "Κούραση χωρίς λόγο", text: "Δεν είναι πάντα θέμα ύπνου. Συχνά είναι η αδυναμία των κυττάρων σου να παράγουν την ενέργεια που χρειάζεσαι." },
        { title: "Συχνοί πονοκέφαλοι", text: "Πριν το αποδώσεις στο στρες, σκέψου αν το σώμα σου προσπαθεί να σου δείξει μια εσωτερική ανισορροπία." },
        { title: "Δυσκολία συγκέντρωσης", text: "Το 'brain fog' δεν είναι κούραση του μυαλού, αλλά συχνά αποτέλεσμα φλεγμονής που επηρεάζει τη διαύγειά σου." },
        { title: "Άγχος", text: "Η ψυχική μας κατάσταση είναι άρρηκτα συνδεδεμένη με τη βιολογική μας ισορροπία." },
        { title: "Χαμηλή ενέργεια", text: "Όταν νιώθεις 'άδειος' από το πρωί, το πρόβλημα ίσως βρίσκεται στο καύσιμο των κυττάρων σου." },
        { title: "Δεν νιώθω όπως παλιά", text: "Αυτή η ανεπαίσθητη αλλαγή στη ζωτικότητα που δεν μπορείς να ονομάσεις, αλλά την αισθάνεσαι κάθε μέρα." },
        { title: "Το παιδί μου δυσκολεύεται", text: "Η σχολική απόδοση και η προσοχή ξεκινούν από τη σωστή κυτταρική θρέψη." },
        { title: "Ξεσπάσματα παιδιού", text: "Οι απότομες αλλαγές στη διάθεση των παιδιών συχνά κρύβουν μια βιολογική ανάγκη για ισορροπία." },
        { title: "Θέλω πρόληψη", text: "Η υγεία δεν είναι η απουσία ασθένειας, αλλά η θωράκιση του οργανισμού πριν εμφανιστούν τα σημάδια." },
        { title: "Κάτι άλλο με απασχολεί", text: "Κάθε οργανισμός είναι μοναδικός. Αν νιώθεις ότι κάτι δεν πάει καλά, μάλλον έχεις δίκιο." }
      ]
    },
    empathy: {
      title: "Το βλέπω αυτό πολύ συχνά… και συνήθως δεν είναι τυχαίο.",
      text: "Πολλές φορές, αυτά που νιώθεις δεν έχουν μία ξεκάθαρη αιτία. Το σώμα μας όμως πάντα μας δίνει σημάδια όταν κάτι δεν λειτουργεί σωστά. Δεν είμαι εδώ ως μια εταιρεία, αλλά ως ένας άνθρωπος που θέλει να μοιραστεί μαζί σου το δρόμο προς την πραγματική ισορροπία."
    },
    inflammation: {
      title: "Χρόνια Χαμηλού Βαθμού Φλεγμονή",
      text: "Ίσως έχεις ακούσει τον όρο. Δεν είναι κάτι έντονο ή άμεσο. Είναι μια 'σιωπηλή' κατάσταση που μπορεί να επηρεάζει την ενέργεια, τη διάθεση και τη συνολική λειτουργία του οργανισμού.",
      points: [
        "Συχνά δεν φαίνεται στις απλές εξετάσεις",
        "Συνδέεται με καθημερινά συμπτώματα",
        "Το σώμα χάνει την ισορροπία του βαθιά"
      ]
    },
    cellular: {
      title: "Κυτταρική Ανισορροπία",
      text: "Η σωστή λειτουργία του οργανισμού ξεκινά από το επίπεδο των κυττάρων. Όταν υπάρχει ανισορροπία εκεί, επηρεάζεται η καθαρότητα σκέψης, η άμυνα και η καθημερινή ποιότητα ζωής."
    },
    simpleTests: {
      title: "Γιατί δεν φαίνεται στις απλές εξετάσεις;",
      text: "Οι συνηθισμένες αιματολογικές εξετάσεις δείχνουν μια γενική εικόνα. Υπάρχουν πληροφορίες που δεν φαίνονται εκεί, και γι' αυτό πολλοί άνθρωποι νιώθουν ότι κάτι δεν πάει καλά χωρίς να έχουν απαντήσεις."
    },
    analysis: {
      title: "Εξειδικευμένη Ανάλυση",
      text: "Μια ανάλυση που δίνει βαθιά εικόνα για την εσωτερική ισορροπία, αντικατοπτρίζοντας τι συμβαίνει στο σώμα τους τελευταίους μήνες.",
      features: [
        "Λίγες σταγόνες αίματος",
        "Ανεξάρτητο εργαστήριο",
        "Πιστοποιήσεις CE, ISO, IVD"
      ]
    },
    process: {
      title: "Η Διαδικασία των 120 Ημερών",
      steps: [
        { title: "Ανάλυση", text: "Ξεκινάμε με την αποτύπωση της τωρινής κατάστασης." },
        { title: "Εξατομίκευση", text: "Διαμορφώνουμε την προσέγγιση βάσει των αποτελεσμάτων." },
        { title: "Υποστήριξη", text: "120 ημέρες εστιασμένης προσπάθειας για ισορροπία." },
        { title: "Επαλήθευση", text: "Επαναληπτική ανάλυση για να δούμε την πραγματική αλλαγή." }
      ]
    },
    kids: {
      title: "Για τα παιδιά μας",
      text: "Δυσκολία συγκέντρωσης, νεύρα ή ξεσπάσματα; Μια πιο ήρεμη, ανθρώπινη ματιά σε αυτό που απασχολεί κάθε γονιό, εστιάζοντας στην εσωτερική ισορροπία."
    },
    invitation: {
      title: "Αν θέλεις, μπορούμε να το δούμε μαζί.",
      text: "Να σου εξηγήσω τι μπορεί να συμβαίνει και να δούμε αν αυτή η διαδικασία είναι κάτι που σου ταιριάζει πραγματικά."
    },
    form: {
      title: "Ξεκίνα με μια δωρεάν πρώτη ενημέρωση",
      text: "Άφησε τα στοιχεία σου και θα επικοινωνήσω προσωπικά μαζί σου.",
      personalMessage: "Αν κάτι από αυτά που διάβασες σου φάνηκε οικείο, δεν είσαι μόνος. Μπορούμε να το δούμε μαζί.",
      personalName: "Έφη Μακρή",
      personalTitle: "Σύμβουλος κυτταρικής υγείας & ευεξίας",
      name: "Όνομα",
      phone: "Τηλέφωνο",
      email: "Email",
      timing: "Πότε σε εξυπηρετεί;",
      message: "Πες μου με λίγα λόγια τι σε απασχολεί (προαιρετικό)",
      cta: "Θέλω ενημέρωση",
      privacy: "Τα στοιχεία σου χρησιμοποιούνται μόνο για επικοινωνία μαζί σου."
    }
  },
  en: {
    langSelect: {
      title: "Choose your language",
      subtitle: "Select to continue"
    },
    hero: {
      title: "You feel it… and it might not be a coincidence.",
      subtitle: "Your body is speaking to you. Are you listening?",
      text: "Unexplained fatigue, headaches, lack of focus, anxiety, low energy… Many consider these normal. Yet, they are often signs that something deep inside isn't functioning as it should.",
      ctaPrimary: "Learn more",
      ctaSecondary: "Free initial consultation"
    },
    symptoms: {
      title: "Do you recognize any of these?",
      cards: [
        { title: "Unexplained fatigue", text: "It's not always about sleep. Often it's your cells' inability to produce the energy you need." },
        { title: "Frequent headaches", text: "Before attributing it to stress, consider if your body is showing an internal imbalance." },
        { title: "Difficulty focusing", text: "'Brain fog' isn't just mental tiredness, but often a result of inflammation affecting clarity." },
        { title: "Anxiety", text: "Our mental state is deeply connected to our biological balance." },
        { title: "Low energy", text: "When you feel 'empty' from the morning, the problem might lie in your cellular fuel." },
        { title: "Not feeling like myself", text: "That subtle change in vitality you can't name, but feel every single day." },
        { title: "Child struggling", text: "School performance and attention start from proper cellular nutrition." },
        { title: "Child outbursts", text: "Sudden mood changes in children often hide a biological need for balance." },
        { title: "Prevention", text: "Health isn't the absence of illness, but shielding the body before signs appear." },
        { title: "Something else", text: "Every organism is unique. If you feel something is wrong, you're probably right." }
      ]
    },
    empathy: {
      title: "I see this very often… and it's usually not accidental.",
      text: "Many times, what you feel doesn't have a clear cause. But our body always gives us signs when something isn't right. I'm not here as a company, but as a person who wants to share the path to true balance with you."
    },
    inflammation: {
      title: "Chronic Low-Grade Inflammation",
      text: "You might have heard the term. It's not intense or immediate. It's a 'silent' condition that can affect energy, mood, and overall function.",
      points: [
        "Often hidden from simple tests",
        "Linked to daily symptoms",
        "Deep loss of body balance"
      ]
    },
    cellular: {
      title: "Cellular Imbalance",
      text: "Proper function starts at the cellular level. When imbalance exists there, it affects mental clarity, immunity, and quality of life."
    },
    simpleTests: {
      title: "Why doesn't it show in simple tests?",
      text: "Standard blood tests show a general picture. There is information hidden from them, which is why many feel something is wrong without getting answers."
    },
    analysis: {
      title: "Specialized Analysis",
      text: "An analysis that provides a deep view of internal balance, reflecting what has happened in the body over the last few months.",
      features: [
        "Just a few drops of blood",
        "Independent laboratory",
        "CE, ISO, IVD certified"
      ]
    },
    process: {
      title: "The 120-Day Process",
      steps: [
        { title: "Analysis", text: "We start by capturing your current state." },
        { title: "Personalization", text: "We shape the approach based on your results." },
        { title: "Support", text: "120 days of focused effort towards balance." },
        { title: "Verification", text: "Repeat analysis to see the actual change." }
      ]
    },
    kids: {
      title: "For our children",
      text: "Difficulty focusing or outbursts? A calmer, more human look at what concerns every parent, focusing on internal balance."
    },
    invitation: {
      title: "If you want, we can look at it together.",
      text: "Let me explain what might be happening and see if this process is truly right for you."
    },
    form: {
      title: "Start with a free consultation",
      text: "Leave your details and I will contact you personally.",
      personalMessage: "If something you read felt familiar, you are not alone. We can look at it together.",
      personalName: "Effie Makri",
      personalTitle: "Cellular Health & Wellness Consultant",
      name: "Name",
      phone: "Phone",
      email: "Email",
      timing: "When is best for you?",
      message: "Tell me briefly what concerns you (optional)",
      cta: "I want information",
      privacy: "Your details are only used to contact you."
    }
  },
  de: {
    langSelect: {
      title: "Wählen Sie Ihre Sprache",
      subtitle: "Wählen Sie aus, um fortzufahren"
    },
    hero: {
      title: "Du spürst es… und es ist vielleicht kein Zufall.",
      subtitle: "Dein Körper spricht zu dir. Hörst du zu?",
      text: "Grundlose Müdigkeit, Kopfschmerzen, Konzentrationsmangel, Angstzustände, wenig Energie… Viele halten das für normal. Doch oft sind es Zeichen, dass im Körper etwas nicht so läuft, wie es sollte.",
      ctaPrimary: "Mehr erfahren",
      ctaSecondary: "Kostenlose Erstberatung"
    },
    symptoms: {
      title: "Erkennen Sie sich hier wieder?",
      cards: [
        { title: "Grundlose Müdigkeit", text: "Es liegt nicht immer am Schlaf. Oft ist es die Unfähigkeit Ihrer Zellen, Energie zu produzieren." },
        { title: "Häufige Kopfschmerzen", text: "Bevor Sie es auf Stress schieben, überlegen Sie, ob Ihr Körper ein inneres Ungleichgewicht zeigt." },
        { title: "Konzentrationsmangel", text: "'Brain Fog' ist nicht nur geistige Müdigkeit, sondern oft eine Folge von Entzündungen." },
        { title: "Angstzustände", text: "Unser psychischer Zustand ist eng με την βιολογική μας ισορροπία verbunden." },
        { title: "Wenig Energie", text: "Wenn Sie sich morgens 'leer' fühlen, liegt das Problem vielleicht am Zelltreibstoff." },
        { title: "Nicht ich selbst", text: "Diese subtile Veränderung der Vitalität, die man nicht benennen kann, aber jeden Tag spürt." },
        { title: "Kind hat Schwierigkeiten", text: "Schulleistung και Aufmerksamkeit beginnen bei der richtigen Zellernährung." },
        { title: "Ausbrüche beim Kind", text: "Plötzliche Stimmungsschwankungen bei Kindern verbergen oft ein Bedürfnis nach Balance." },
        { title: "Prävention", text: "Gesundheit ist nicht die Abwesenheit von Krankheit, sondern der Schutz des Körpers." },
        { title: "Etwas anderes", text: "Jeder Organismus ist einzigartig. Wenn Sie fühlen, dass etwas nicht stimmt, haben Sie wahrscheinlich recht." }
      ]
    },
    empathy: {
      title: "Ich sehe das sehr oft… und es ist meist kein Zufall.",
      text: "Oft hat das, was Sie fühlen, keine klare Ursache. Aber unser Körper gibt uns immer Zeichen. Ich bin nicht als Firma hier, sondern als Mensch, der den Weg zur Balance mit Ihnen teilen möchte."
    },
    inflammation: {
      title: "Chronische stille Entzündung",
      text: "Vielleicht haben Sie den Begriff schon gehört. Es ist ein 'stiller' Zustand, der Energie, Stimmung und Funktion beeinflussen kann.",
      points: [
        "Oft in einfachen Tests verborgen",
        "Verbunden mit täglichen Symptomen",
        "Tiefer Verlust der Körperbalance"
      ]
    },
    cellular: {
      title: "Zelluläres Ungleichgewicht",
      text: "Richtige Funktion beginnt auf zellulärer Ebene. Ein Ungleichgewicht dort beeinflusst Klarheit, Immunität und Lebensqualität."
    },
    simpleTests: {
      title: "Warum zeigt es sich nicht in einfachen Tests?",
      text: "Standard-Bluttests zeigen ein allgemeines Bild. Es gibt Informationen, die dort verborgen bleiben, weshalb viele sich unwohl fühlen ohne Antworten."
    },
    analysis: {
      title: "Spezialisierte Analyse",
      text: "Eine Analyse, die einen tiefen Einblick in die interne Balance gibt και das Geschehen der letzten Monate widerspiegelt.",
      features: [
        "Nur wenige Tropfen Blut",
        "Unabhängiges Labor",
        "CE, ISO, IVD zertifiziert"
      ]
    },
    process: {
      title: "Der 120-Tage-Prozess",
      steps: [
        { title: "Analyse", text: "Wir beginnen mit der Erfassung Ihres aktuellen Zustands." },
        { title: "Personalisierung", text: "Wir gestalten den Ansatz basierend auf Ihren Ergebnissen." },
        { title: "Unterstützung", text: "120 Tage fokussierte Anstrengung für Balance." },
        { title: "Verifizierung", text: "Wiederholungsanalyse, um die tatsächliche Änderung zu sehen." }
      ]
    },
    kids: {
      title: "Für unsere Kinder",
      text: "Konzentrationsschwierigkeiten oder Ausbrüche? Ein ruhigerer, menschlicherer Blick auf das, was Eltern bewegt."
    },
    invitation: {
      title: "Wenn Sie möchten, schauen wir es uns gemeinsam an.",
      text: "Lassen Sie mich erklären, was passieren könnte, und sehen wir, ob dieser Prozess wirklich zu Ihnen passt."
    },
    form: {
      title: "Starten Sie mit einer kostenlosen Beratung",
      text: "Hinterlassen Sie Ihre Daten und ich werde Sie persönlich kontaktieren.",
      personalMessage: "Wenn Ihnen etwas, das Sie gelesen haben, bekannt vorkommt, sind Sie nicht allein. Wir können es uns gemeinsam ansehen.",
      personalName: "Effie Makri",
      personalTitle: "Beraterin für zelluläre Gesundheit & Wellness",
      name: "Name",
      phone: "Telefon",
      email: "Email",
      timing: "Wann passt es Ihnen am besten?",
      message: "Erzählen Sie mir kurz, was Sie bewegt (optional)",
      cta: "Ich möchte Informationen",
      privacy: "Ihre Daten werden nur zur Kontaktaufnahme verwendet."
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!lang) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-serif italic text-slate-900">Choose your language</h1>
            <p className="text-slate-500">Select to continue</p>
          </div>
          <div className="grid gap-4">
            {(['el', 'en', 'de'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="group relative overflow-hidden bg-white border border-slate-200 p-6 rounded-2xl text-xl font-medium text-slate-800 transition-all hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Globe className="w-5 h-5 text-indigo-500 group-hover:rotate-12 transition-transform" />
                  {l === 'el' ? 'Ελληνικά' : l === 'en' ? 'English' : 'Deutsch'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  const content = translations[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif italic font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Balance.
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLang(null)}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 flex items-center gap-2 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {lang.toUpperCase()}
            </button>
            <a 
              href="#contact" 
              className="hidden sm:block px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-50 rounded-full blur-[120px] opacity-60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold tracking-wide uppercase"
              >
                {content.hero.subtitle}
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-slate-900">
                {content.hero.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                {content.hero.text}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#symptoms" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all group">
                {content.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all">
                {content.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Wellness" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-sm font-bold">Cellular Health</div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-emerald-500"
                />
              </div>
              <div className="mt-2 text-[10px] text-slate-400 uppercase tracking-widest font-bold">Optimal Balance</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section id="symptoms" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">{content.symptoms.title}</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.symptoms.cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  {idx === 0 && <Clock className="w-6 h-6 text-indigo-600 group-hover:text-white" />}
                  {idx === 1 && <Activity className="w-6 h-6 text-indigo-600 group-hover:text-white" />}
                  {idx === 2 && <Brain className="w-6 h-6 text-indigo-600 group-hover:text-white" />}
                  {idx === 3 && <Heart className="w-6 h-6 text-indigo-600 group-hover:text-white" />}
                  {idx === 4 && <Zap className="w-6 h-6 text-indigo-600 group-hover:text-white" />}
                  {idx >= 5 && <Sparkles className="w-6 h-6 text-indigo-600 group-hover:text-white" />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/10 blur-[100px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  {content.empathy.title}
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {content.empathy.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Personal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Personal Advisor</div>
                    <div className="text-indigo-400 text-sm">Health & Wellness Expert</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="aspect-square rounded-[2rem] overflow-hidden rotate-3 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" alt="Balance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Sections */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* Inflammation */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-indigo-50 rounded-[2rem] flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-transparent" />
                <Activity className="w-32 h-32 text-indigo-200 absolute -bottom-8 -right-8 rotate-12" />
                <div className="relative z-10 space-y-6 w-full">
                  {content.inflammation.points.map((p, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm"
                    >
                      <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                      <span className="font-semibold text-slate-700">{p}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-serif text-slate-900">{content.inflammation.title}</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {content.inflammation.text}
              </p>
            </div>
          </div>

          {/* Cellular */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-slate-900">{content.cellular.title}</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {content.cellular.text}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/5 rounded-full blur-3xl" />
              <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-indigo-200 rounded-full"
                />
                <div className="w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center relative z-10 border border-slate-100">
                  <Activity className="w-16 h-16 text-indigo-600" />
                </div>
                {/* Orbital elements */}
                {[0, 120, 240].map((deg, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full"
                    style={{ transform: `rotate(${deg}deg)` }}
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-full absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center shadow-sm">
                      <ShieldCheck className="w-6 h-6 text-indigo-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Tests Section */}
      <section className="py-32 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif max-w-3xl mx-auto leading-tight">
            {content.simpleTests.title}
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            {content.simpleTests.text}
          </p>
          <div className="pt-8">
            <a href="#contact" className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-slate-900">{content.analysis.title}</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {content.analysis.text}
            </p>
            <div className="grid gap-4">
              {content.analysis.features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium text-slate-700">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  {f}
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <div className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-widest">CE Certified</div>
              <div className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-widest">ISO 9001</div>
              <div className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-widest">IVD</div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-12 relative">
            <img 
              src="https://images.unsplash.com/photo-1579154273821-ad991fb9a566?auto=format&fit=crop&q=80&w=800" 
              alt="Lab" 
              className="rounded-2xl shadow-xl w-full h-full object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-slate-900 text-center mb-20">{content.process.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, i) => (
              <div key={i} className="relative space-y-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl font-serif italic text-indigo-600 relative z-10">
                  0{i + 1}
                </div>
                {i < 3 && <div className="hidden lg:block absolute top-8 left-16 w-full h-[2px] bg-indigo-100 -z-0" />}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-4xl font-serif text-slate-900">{content.kids.title}</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {content.kids.text}
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1502086223501-7ea24c3d4e64?auto=format&fit=crop&q=80&w=800" 
                alt="Kids" 
                className="rounded-[2rem] shadow-2xl w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-32 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-serif text-slate-900">{content.invitation.title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {content.invitation.text}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-100 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-violet-100 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-serif text-slate-900 tracking-tight">{content.form.personalName}</h2>
                <div className="w-12 h-0.5 bg-indigo-200 mx-auto rounded-full" />
                <p className="text-indigo-600 font-medium tracking-wide uppercase text-sm">{content.form.personalTitle}</p>
              </div>
            </div>
            <p className="text-2xl font-serif italic text-slate-700 leading-relaxed max-w-2xl mx-auto">
              "{content.form.personalMessage}"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-5xl font-serif text-slate-900 leading-tight">{content.form.title}</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {content.form.text}
              </p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-slate-900 shadow-xl border border-slate-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">{content.form.name}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">{content.form.phone}</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">{content.form.email}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">{content.form.timing}</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none">
                    <option>Morning (09:00 - 12:00)</option>
                    <option>Afternoon (12:00 - 17:00)</option>
                    <option>Evening (17:00 - 21:00)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">{content.form.message}</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
                  </div>
                </div>
                <button className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-[0.98]">
                  {content.form.cta}
                </button>
                <p className="text-center text-xs text-slate-400">
                  {content.form.privacy}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-serif italic font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Balance.
          </div>
          <div className="text-slate-400 text-sm">
            © 2026 Cellular Balance & Wellness. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
