import { useParams } from 'react-router-dom';
import Shell from '../components/Shell';
import MarketingFlow from '../modules/marketing/MarketingFlow';
import ProductFlow from '../modules/product/ProductFlow';
import RegulatoryFlow from '../modules/regulatory/RegulatoryFlow';
import InfrastructureFlow from '../modules/infrastructure/InfrastructureFlow';

const moduleConfig = {
  marketing: { name: 'Marketing', component: MarketingFlow },
  product: { name: 'Product & Service Management', component: ProductFlow },
  regulatory: { name: 'Regulatory Compliance', component: RegulatoryFlow },
  infrastructure: { name: 'Infrastructure Readiness', component: InfrastructureFlow },
};

export default function ModulePage() {
  const { moduleId } = useParams();
  const config = moduleConfig[moduleId];

  if (!config) {
    return (
      <Shell>
        <p>Module not found.</p>
      </Shell>
    );
  }

  const Flow = config.component;

  return (
    <Shell moduleName={config.name}>
      <Flow />
    </Shell>
  );
}
