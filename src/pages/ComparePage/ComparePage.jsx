import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';

function ComparePage() {
  return (
    <SectionTag>
      <PageTitle text="product comparison" />

      <div>
        <Container styles="text-primaryColor">
          <div className="overflow-auto">
            <table>
              <thead>
                <th className="capitalize">product details</th>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default ComparePage;
