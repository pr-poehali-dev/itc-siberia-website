CREATE TABLE IF NOT EXISTS t_p9932520_itc_siberia_website.retention_log (
    id SERIAL PRIMARY KEY,
    run_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    removed_count INTEGER NOT NULL DEFAULT 0,
    retention_days INTEGER NOT NULL,
    triggered_by VARCHAR(50) NOT NULL DEFAULT 'auto'
);

CREATE INDEX IF NOT EXISTS idx_retention_log_run_at ON t_p9932520_itc_siberia_website.retention_log (run_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON t_p9932520_itc_siberia_website.contact_requests (created_at);